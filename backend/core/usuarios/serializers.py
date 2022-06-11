"""Serializers Usuarios"""

# Django
from dataclasses import field
from .models import Usuario

# Django Rest Framework
from rest_framework import serializers


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id', 'nombre', 'username', 'email', 'password')
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validar_datos):
        password = validar_datos.pop('password', None)
        instancia = self.Meta.model(**validar_datos)
        if password is not None:
            instancia.set_password(password)
        instancia.save()
        return instancia
