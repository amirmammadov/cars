from rest_framework import viewsets , status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.utils import timezone
from datetime import timedelta
from .models import Advertisement
from .serializers import AdvertisementSerializer

class AdvertisementViewSet(viewsets.ModelViewSet):
    queryset = Advertisement.objects.all()
    serializer_class = AdvertisementSerializer

    @action(detail=False, methods=['get'])
    def one_cekilmis(self, request):
        queryset = Advertisement.objects.filter(listing_type='one_cekilmis')
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def yeni_elanlar(self, request):
        one_week_ago = timezone.now() - timedelta(days=7)
        queryset = Advertisement.objects.filter(created_at__gte=one_week_ago)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def salon_elanlari(self, request):
        queryset = Advertisement.objects.filter(listing_type='salon')
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
