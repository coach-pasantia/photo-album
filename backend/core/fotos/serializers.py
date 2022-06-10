"""Serializers Fotos"""

# Django
from dataclasses import fields
from pyexpat import model
from .models import Foto
from usuarios.models import Usuario
from usuarios.serializers import UsuarioSerializer

# Django Rest Framework
from rest_framework import serializers


class FotoSerializer(serializers.ModelSerializer):
    usuario = UsuarioSerializer(read_only=True)
    usuario_id = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Usuario.objects.all(), source='usuario')
    fecha_creada = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %H:%M:%S')
    class Meta:
        model = Foto
        fields = '__all__'