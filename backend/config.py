import os

# Define la ruta y configuración de la base de datos
class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql://postgres:yA9MVryS16@localhost:5433/newuniserve')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'clave-secreta-segura')
