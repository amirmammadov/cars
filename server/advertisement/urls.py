from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AdvertisementViewSet

router = DefaultRouter()
router.register(r'', AdvertisementViewSet, basename='advertisement')

urlpatterns = [
    path('', include(router.urls)),
    path('advertisement/one-cekilmis/', AdvertisementViewSet.as_view({'get': 'one_cekilmis'}), name='one-cekilmis'),
    path('advertisement/yeni-elanlar/', AdvertisementViewSet.as_view({'get': 'yeni_elanlar'}), name='yeni-elanlar'),
    path('advertisement/salon-elanlari/', AdvertisementViewSet.as_view({'get': 'salon_elanlari'}), name='salon-elanlari'),
]
