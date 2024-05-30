from rest_framework import serializers
from .models import Country, Company, PhoneNumber

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['id', 'name']

class PhoneNumberSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhoneNumber
        fields = ['id', 'number']

class CompanySerializer(serializers.ModelSerializer):
    operating_country = CountrySerializer(many=True)
    phone_numbers = PhoneNumberSerializer(many=True)

    class Meta:
        model = Company
        fields = ['id', 'name', 'address', 'logo', 'operating_country', 'phone_numbers', 'working_hours', 'rating']
