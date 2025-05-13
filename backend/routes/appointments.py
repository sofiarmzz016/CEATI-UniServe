from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from flask_jwt_extended import get_jwt_identity, jwt_required
from app import db
from models import Appointment
from datetime import datetime

appointments_bp = Blueprint('appointments', __name__)

@appointments_bp.route('/occupied', methods=['GET'])
@cross_origin(origins="http://localhost:4200", supports_credentials=True)
@jwt_required()
def get_occupied_appointments():
    try:
        date_str = request.args.get('date')
        if not date_str:
            return jsonify({'error': 'Parámetro de fecha faltante'}), 400

        appointment_type = request.args.get('type')
        if not appointment_type:
            return jsonify({'error': 'Parámetro de tipo faltante'}), 400

        try:
            date = datetime.strptime(date_str, '%Y-%m-%d').date()
        except ValueError:
            return jsonify({'error': 'Fecha inválida. Usa formato YYYY-MM-DD.'}), 400

        appointments = Appointment.query.filter_by(date=date, type=appointment_type).all()
        occupied_times = [appt.time.strftime('%H:%M') for appt in appointments]

        return jsonify({'occupied_times': str(occupied_times)}), 200

    except Exception as e:
        return jsonify({'error': 'Error interno del servidor', 'details': str(e)}), 500



@appointments_bp.route('/create', methods=['POST'])
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

@appointments_bp.route('/user/<int:user_id>', methods=['GET'])
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

@appointments_bp.route('/delete/<int:appointment_id>', methods=['DELETE'])
@jwt_required()
def delete_appointment(appointment_id):
    try:
        appointment = Appointment.query.get(appointment_id)
        if not appointment:
            return jsonify({'error': 'Cita no encontrada'}), 404

        db.session.delete(appointment)
        db.session.commit()
        return jsonify({'message': 'Cita eliminada correctamente'}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
