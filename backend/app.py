# from flask import Flask, render_template
# app = Flask(__name__)
# @app.route('/')
# def index():
#     return render_template('app.component.html')
# if __name__ == '__main__':
#     app.run()



import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

# Configuración de la base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL') or \
    'postgresql://health_user:StrongPassword123!@localhost/health_appointments'
    
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Importar modelos después de inicializar db
from models import User, Appointment