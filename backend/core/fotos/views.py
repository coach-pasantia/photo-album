"""Views Fotos"""

# Django
from xmlrpc.client import boolean
from .models import Foto
from .serializers import FotoSerializer
from usuarios.models import Usuario

# Django Rest Framework
from rest_framework.views import Response
from rest_framework import generics
from rest_framework import viewsets


class FotoViewSet(viewsets.ModelViewSet):
    queryset = Foto.objects.all()
    serializer_class = FotoSerializer

    def create(self, request, *args, **kwargs):
        foto = Foto(
            etiqueta=request.data['etiqueta'],
            link=request.data['link'],
            usuario=Usuario.objects.get(id=request.data['usuario_id']),
            is_default= request.data['is_default']
        )

        if foto.link.startswith('http://') or foto.link.startswith('https://'):
            foto.save()
            return Response({'detail': 'Foto Creada'}, status=200)
        else:
            return Response({'detail': 'Ingrese un link válido'}, status=400)

    def destroy(self, request, *args, **kwargs):
        foto = self.get_object()
        foto.delete()
        return Response({'detail': 'Foto Eliminada'}, status=204)

    def update(self, request, *args, **kwargs):
        foto = self.get_object()
        foto.etiqueta = request.data['etiqueta']
        foto.link = request.data['link']
        foto.usuario = Usuario.objects.get(id=request.data['usuario_id'])
        foto.is_default = request.data['is_default']
        if foto.link.startswith('http://') or foto.link.startswith('https://'):
            foto.save()
            return Response({'detail': 'Foto Actualizada'}, status=200)
        else:
            return Response({'detail': 'Ingrese un link válido'}, status=400)


class FotoporEtiqueta(generics.ListAPIView):
    queryset = Foto.objects.all()
    serializer_class = FotoSerializer

    def get_queryset(self):
        etiqueta = self.request.query_params.get('etiqueta', None)
        usuario = self.request.query_params.get('usuario', None)
        if etiqueta and usuario is not None:
            queryset = Foto.objects.filter(etiqueta__icontains=etiqueta, usuario__username=usuario)
        return queryset
        

class FotoporUsername(generics.ListAPIView):
    queryset = Foto.objects.all()
    serializer_class = FotoSerializer

    def get_queryset(self):
        username = self.request.query_params.get('username', None)
        if username is not None:
            queryset = Foto.objects.filter(usuario__username=username)
        return queryset