"""Urls Fotos"""

# Django
from django.urls import path
from django.db import router
from .views import FotoViewSet, FotoPorEtiqueta, FotoPorUsuario,FotosDefault

# Django Rest Framework
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', FotoViewSet)

urlpatterns = router.urls

urlpatterns += [
    path('filtro-etiqueta', FotoPorEtiqueta.as_view()),
    path('filtro-usuario', FotoPorUsuario.as_view()),
    path('filtro-default', FotosDefault.as_view()),
]