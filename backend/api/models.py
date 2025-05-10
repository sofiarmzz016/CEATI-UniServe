from django.db import models

# Create your models here.
#hay q irlo modificandoOoOO
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Departamento(models.Model):
    nombre = models.CharField(max_length=100)  # Ej: "Nutriología", "Psicología"
    descripcion = models.TextField()
    ubicacion = models.CharField(max_length=200)
    telefono = models.CharField(max_length=15)

    def __str__(self):
        return self.nombre

class Servicio(models.Model):
    departamento = models.ForeignKey(Departamento, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=100)  # Ej: "Consulta nutricional"
    duracion = models.PositiveIntegerField(help_text="Duración en minutos")
    cupos_disponibles = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.nombre} ({self.departamento})"

class Cita(models.Model):
    ESTADOS = [
        ('P', 'Pendiente'),
        ('C', 'Confirmada'),
        ('R', 'Rechazada')
    ]
    
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    servicio = models.ForeignKey(Servicio, on_delete=models.CASCADE)
    fecha_hora = models.DateTimeField()
    estado = models.CharField(max_length=1, choices=ESTADOS, default='P')
    comentarios = models.TextField(blank=True)

    class Meta:
        unique_together = [['servicio', 'fecha_hora']]  # Evita citas duplicadas