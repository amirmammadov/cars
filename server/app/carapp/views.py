from rest_framework import generics
from .models import Car
from .serializer import CarSerializer
from django.db.models import Q

class CarListCreateView(generics.ListCreateAPIView):
    serializer_class = CarSerializer

    def get_queryset(self):
        queryset = Car.objects.all()
        name = self.request.query_params.get('name', None)
        location = self.request.query_params.get('location', None)
        
        if name:
            queryset = queryset.filter(name__icontains=name)
        if location:
            queryset = queryset.filter(location__icontains=location)

        return queryset
