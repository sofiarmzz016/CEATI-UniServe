from flask import Blueprint, request, jsonify
from models import User, db
from auth.jwt_utils import hash_password, verify_password, create_token
from flask_jwt_extended import jwt_required, get_jwt_identity

users_bp = Blueprint('users', __name__)

@users_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    if User.query.filter_by(email=data['email']).first():
        return jsonify({"msg": "Email ya registrado"}), 400

    new_user = User(
        email=data['email'],
        password_hash=hash_password(data['password']),
        full_name=data['full_name']
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "Usuario creado"}), 201

@users_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if not user or not verify_password(data['password'], user.password_hash):
        return jsonify({"msg": "Credenciales inválidas"}), 401

    token = create_token(identity=user.id)
    return jsonify(access_token=token)

@users_bp.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return jsonify({
        "id": user.id,
        "email": user.email,
        "full_name": user.full_name
    })
