from django.shortcuts import render

from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from .models import Company
from .serializers import CompanySerializer

class CompanyListView(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['rating', 'operating_country__name']
    search_fields = ['name', 'operating_country__name']
