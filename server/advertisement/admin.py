from django.contrib import admin
from .models import Advertisement, CarBrand, CarModel, CarInterior, FuelType, ParkingSensor, CruiseControl, InteriorMaterial, InteriorColor, ExteriorColor, Supply, Other, Transmitter, Gearbox, FuelEfficiency, Country, Seats, CarImage



@admin.register(Advertisement)
class AdvertisementAdmin(admin.ModelAdmin):
    list_display = ['id', 'car_brand', 'car_model', 'condition', 'price', 'currency', 'mileage']
    list_filter = ['condition','production_year','listing_type']
    search_fields = ['car_brand__name', 'car_model__name', 'price']
    list_per_page = 20

# CarImage modelini admin paneline kaydetme
@admin.register(CarImage)
class CarImageAdmin(admin.ModelAdmin):
    list_display = ['id', 'advertisement', 'image']
    list_filter = ['advertisement']
    search_fields = ['advertisement__car_brand__name', 'advertisement__car_model__name']
    list_per_page = 20


@admin.register(CarBrand)
class CarBrandAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(CarModel)
class CarModelAdmin(admin.ModelAdmin):
    list_display = ['brand', 'name']

@admin.register(CarInterior)
class CarInteriorAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(FuelType)
class FuelTypeAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(ParkingSensor)
class ParkingSensorAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(CruiseControl)
class CruiseControlAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(InteriorMaterial)
class InteriorMaterialAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(InteriorColor)
class InteriorColorAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(ExteriorColor)
class ExteriorColorAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(Supply)
class SupplyAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(Other)
class OtherAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(Transmitter)
class TransmitterAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(Gearbox)
class GearboxAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(FuelEfficiency)
class FuelEfficiencyAdmin(admin.ModelAdmin):
    list_display = ['title']

@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ['title']

@admin.register(Seats)
class SeatsAdmin(admin.ModelAdmin):
    list_display = ['title']


