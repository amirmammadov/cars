from rest_framework import serializers
from .models import Advertisement, CarImage

class CarImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarImage
        fields = ['image']

class AdvertisementSerializer(serializers.ModelSerializer):
    images = CarImageSerializer(many=True, read_only=True)

    class Meta:
        model = Advertisement
        fields = [
            'id', 'condition', 'car_brand', 'car_model', 'price', 'currency',
            'mileage', 'engine_power', 'production_year', 'fuel_type',
            'fuel_efficiency', 'gearbox', 'transmitter', 'seats',
            'parking_sensor', 'cruise_control', 'interior_material',
            'seller', 'country', 'interior_color', 'exterior_color',
            'car_supplies', 'other', 'additional_notes', 'name',
            'surname', 'city', 'phone_operator', 'phone_number',
            'vin_code', 'listing_type', 'trade_options', 'images', 
        ] # image and trade_option field elave edilib

    def validate_images(self, value):
        if len(value) < 3:
            raise serializers.ValidationError("Minimum 3 images must be provided.")
        elif len(value) > 20:
            raise serializers.ValidationError("Maximum 20 images can be provided.")
        return value

    def create(self, validated_data):
        images_data = validated_data.pop('images')
        advertisement = Advertisement.objects.create(**validated_data)
        for image_data in images_data:
            CarImage.objects.create(advertisement=advertisement, **image_data)
        return advertisement