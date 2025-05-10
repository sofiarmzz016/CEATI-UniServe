from django.shortcuts import render

# Create your views here.
#Este tmb es ejemplo 
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Departamento, Servicio, Cita
from .serializers import ServicioSerializer, CitaSerializer

@api_view(['GET'])
def servicios_disponibles(request):
    servicios = Servicio.objects.filter(cupos_disponibles__gt=0)
    serializer = ServicioSerializer(servicios, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def agendar_cita(request):
    serializer = CitaSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(usuario=request.user)
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)