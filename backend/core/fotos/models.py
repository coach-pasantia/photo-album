"""Models Fotos"""

# Django
import code
from email import message
from os import link
from django.db import models
from usuarios.models import Usuario
from django.core.validators import URLValidator


class Foto(models.Model):
    etiqueta = models.CharField(max_length=255)
    link = models.URLField(validators=[URLValidator(schemes=['http', 'https'], regex='^(http|https)://')])
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    fecha_creada = models.DateTimeField(auto_now_add=True)
    is_default = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.etiqueta
