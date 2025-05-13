# UniServe

> ✨ Proyecto web full stack con Angular 19 y Flask + PostgreSQL.

## 📝 Descripción del proyecto

**Nombre del proyecto:** UniServe  
**Descripción corta:** Plataforma para proveer toda la información universitaria a los estudiantes en un solo lugar, además de gestionar citas entre estudiantes.
**Autores:** Sofía Catalina Ramírez Ríos
**Fecha:** [13/05/2025]  
**Tecnologías:** Angular 19, Flask, PostgreSQL

---

## 📁 Estructura del proyecto

```
/backend (API REST)
...todo lo demás corresponde a frontend
```

---

## ▶️ Cómo ejecutar el proyecto

### 🔧 Requisitos previos

- Node.js v18 o superior
- Python 3.10 o superior
- PostgreSQL corriendo localmente o en la nube
- Angular CLI (`npm install -g @angular/cli`)

---

## 🚀 Frontend (Angular)

### 1. Instalar dependencias

```bash
npm install
```

### 2. Cómo levantar el servidor

```bash
ng serve
```

o

```bash
npm run serve
```

Una vez corriendo, visita: http://localhost:4200 (este es el puerto definido para angular)

## 🌐 Backend (Flask API)

### 1. Para instalar dependencias

```bash
cd backend
pip install -r requirements.txt
```

### 2. Configurar la base de datos

En nuestro caso nosotros usamos pgAdmin 4 (PostgreSQL) de manera local como base de datos.
Sin embargo pueden conectar la base de datos como mejor les parezca siempre y cuando sea con PostgreSQL.

Recomendamos seguir el mismo método que seguimos nosotros de pgAmin4

Para configurar la base de datos ir a `config.py` y cambiar la línea de `SQLALCHEMY_DATABASE_URI` por la de su base de datos.

```bash
SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql://postgres:contrasena_de_tu_servidor@localhost/nombre_de_la_bd')
SQLALCHEMY_TRACK_MODIFICATIONS = False
JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'clave-secreta-segura')
```

### 3. Inicializar la base de datos

En caso de ya haber una carpeta de migraciones (`/migrations`) en backend, eliminarla.

Para inicializar la base de datos, correr migraciones y dejarla lista:

```bash
flask db init
flask db migrate
flask db upgrade
```

### 4. Correr el backend

Para correr el backend abrir una terminal y correr:

```bash
flask run
```
