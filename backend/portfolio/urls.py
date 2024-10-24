from django.urls import path
from .views import ProjectViewSet

urlpatterns = [
    path('projects/', ProjectViewSet.as_view({'get': 'list'}), name='projects'),
    path('get_project/<pk>/', ProjectViewSet.as_view({'get': 'retrieve'}), name='get_project'),
]