"""Urls Fotos"""

# Django
from django.urls import path
from django.db import router
from .views import FotoViewSet, FotoporEtiqueta, FotoporUsername

# Django Rest Framework
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', FotoViewSet)

urlpatterns = router.urls

urlpatterns += [
    path('filtro-etiqueta', FotoporEtiqueta.as_view()),
    path('filtro-username', FotoporUsername.as_view()),
]