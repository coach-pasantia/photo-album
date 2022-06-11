"""Views Fotos"""

# Django
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
        foto.save()
        return Response({'detail': 'Foto Actualizada'}, status=200)


class FotoporEtiqueta(generics.ListAPIView):
    queryset = Foto.objects.all()
    serializer_class = FotoSerializer

    def get_queryset(self):
        etiqueta = self.request.query_params.get('etiqueta', None)
        if etiqueta is not None:
            queryset = Foto.objects.filter(etiqueta__icontains=etiqueta)
        return queryset
