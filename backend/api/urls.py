from django.urls import path
from . import views

urlpatterns = [
    path('servicios/', views.servicios_disponibles, name='servicios'),
    path('agendar/', views.agendar_cita, name='agendar'),
]