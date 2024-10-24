from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status, viewsets


from .models import Projects
from .serializers import ProjectSerializer


class ProjectViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Projects.objects.all()
        serializer = ProjectSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Projects.objects.get(pk=pk)
        serializer = ProjectSerializer(queryset)
        return Response(serializer.data)
