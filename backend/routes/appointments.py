from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from app import db
from models import Appointment
from datetime import datetime

appointments_bp = Blueprint('appointments', __name__)

@appointments_bp.route('/appointments/occupied', methods=['GET'])
@jwt_required()
def get_occupied_appointments():
    date_str = request.args.get('date')
    appointment_type = request.args.get('type')

    try:
        date = datetime.strptime(date_str, '%Y-%m-%d').date()
    except ValueError:
        return jsonify({'error': 'Fecha inválida. Usa formato YYYY-MM-DD.'}), 400

    appointments = Appointment.query.filter_by(date=date, type=appointment_type).all()
    occupied_times = [appt.time.strftime('%H:%M') for appt in appointments]

    return jsonify({'occupied_times': occupied_times}), 200


@appointments_bp.route('/appointments', methods=['POST'])
@jwt_required()
def create_appointment():
    data = request.get_json()

    try:
        new_appointment = Appointment(
            user_id=data['user_id'],
            type=data['type'],
            description=data.get('description'),
            date=datetime.strptime(data['date'], '%Y-%m-%d').date(),
            time=datetime.strptime(data['time'], '%H:%M').time()
        )
        db.session.add(new_appointment)
        db.session.commit()
        return jsonify({'message': 'Cita creada correctamente'}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@appointments_bp.route('/appointments/user/<int:user_id>', methods=['GET'])
@jwt_required()
def get_user_appointments(user_id):
    appointments = Appointment.query.filter_by(user_id=user_id).all()
    result = [{
        'id': appt.id,
        'type': appt.type,
        'description': appt.description,
        'date': appt.date.strftime('%Y-%m-%d'),
        'time': appt.time.strftime('%H:%M'),
        'created_at': appt.created_at.isoformat()
    } for appt in appointments]

    return jsonify(result), 200
