# Usa una imagen base de Python
FROM python:3.9-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY . .

# Instala las dependencias necesarias directamente
RUN pip install --no-cache-dir flask flask-migrate flask-jwt-extended opencv-python numpy tensorflow matplotlib scipy

# Expone el puerto
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:5000"]
