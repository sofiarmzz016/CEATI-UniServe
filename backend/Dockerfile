# Usa una imagen base de Python
FROM python:3.9-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY . .

# Instala las dependencias necesarias, incluyendo flask_cors
RUN pip install --no-cache-dir flask flask_sqlalchemy flask_migrate flask_cors flask_jwt_extended werkzeug gunicorn psycopg2-binary


# Expone el puerto
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:5000"]
