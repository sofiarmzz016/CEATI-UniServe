from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager

app = Flask(__name__)

# Configuración
app.config.from_object('config.Config')

# Extensiones
db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)
jwt = JWTManager(app)

# Importar modelos
from models import User, Appointment

# Registrar blueprints
from routes.users import users_bp
from routes.appointments import appointments_bp

app.register_blueprint(users_bp, url_prefix='/api/users')
app.register_blueprint(appointments_bp, url_prefix='/api/appointments')

if __name__ == '__main__':
    app.run(debug=True)
