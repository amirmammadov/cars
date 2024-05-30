from django.urls import path
from .views import (
    CountryListCreateView, CountryDetailView,
    CompanyListCreateView, CompanyDetailView,
    PhoneNumberListCreateView, PhoneNumberDetailView
)

urlpatterns = [
    path('countries/', CountryListCreateView.as_view(), name='country-list-create'),
    path('countries/<int:pk>/', CountryDetailView.as_view(), name='country-detail'),
    path('companies/', CompanyListCreateView.as_view(), name='company-list-create'),
    path('companies/<int:pk>/', CompanyDetailView.as_view(), name='company-detail'),
    path('phone-numbers/', PhoneNumberListCreateView.as_view(), name='phone-number-list-create'),
    path('phone-numbers/<int:pk>/', PhoneNumberDetailView.as_view(), name='phone-number-detail'),
]
