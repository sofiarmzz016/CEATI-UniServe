from rest_framework import serializers
from .models import Servicio, Cita

class ServicioSerializer(serializers.ModelSerializer):
    departamento = serializers.StringRelatedField()
    
    class Meta:
        model = Servicio
        fields = ['id', 'nombre', 'departamento', 'duracion']

class CitaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cita
        fields = ['id', 'servicio', 'fecha_hora', 'comentarios']