from rest_framework import generics, status
from rest_framework.response import Response
from .models import Country, Company, PhoneNumber
from .serializers import CountrySerializer, CompanySerializer, PhoneNumberSerializer

class CountryListCreateView(generics.ListCreateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class CountryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class CompanyListCreateView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class PhoneNumberListCreateView(generics.ListCreateAPIView):
    queryset = PhoneNumber.objects.all()
    serializer_class = PhoneNumberSerializer

class PhoneNumberDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PhoneNumber.objects.all()
    serializer_class = PhoneNumberSerializer
