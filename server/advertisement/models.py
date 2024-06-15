from django.db import models
from moto4.utils.base import BaseModel



class CarBrand(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class CarModel(models.Model):
    brand = models.ForeignKey(CarBrand, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class CarInterior(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class FuelType(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ParkingSensor(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class CruiseControl(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class InteriorMaterial(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class InteriorColor(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class ExteriorColor(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Supply(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Other(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Transmitter(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Gearbox(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class FuelEfficiency(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title
    
class Country(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Seats(models.Model):
    title = models.IntegerField()

    # def __str__(self):
    #     return self.title

class Advertisement(BaseModel):
    CONDITION_CHOICES = (
        ('new', 'Yeni'),
        ('used', 'İstifadə olunmuş'),
    )

    CURRENCY_CHOICES = (
        ('AZN', 'AZN'),
        ('USD', 'USD'),
        ('EUR', 'EUR'),
    )
    OPERATOR_CHOICES = (
        ('050', '050'),
        ('051', '051'),
        ('055', '055'),
        ('070', '070'),
        ('077', '077'),
    )
    SELLER_CHOICES = (
        ('Personal Seller', 'Şəxsi Satıcı'),
        ('Seller', 'Satıcı'),
        ('Company', 'Şirkət'),
    )
    LISTING_TYPE_CHOICES = (
        ('salon', 'Salon'),
        ('one_cekilmis', 'One Çəkilmiş'),
    )
    TRADE_OPTIONS_CHOICES = (
        ('barter', 'Barter'),
        ('credit', 'Kredit'),
        ('all', 'Hamısı'),
    )
    condition = models.CharField(max_length=10, choices=CONDITION_CHOICES) # islenmis ve ya yeni
    car_brand = models.ForeignKey(CarBrand, on_delete=models.CASCADE) # marka
    car_model = models.ForeignKey(CarModel, on_delete=models.CASCADE) # masin model
    car_interior = models.ForeignKey(CarInterior, on_delete=models.CASCADE)  # interyer
    price = models.IntegerField() # qiymet
    currency = models.CharField(max_length=3, choices=CURRENCY_CHOICES)  # valyuta
    mileage = models.IntegerField() # yurus
    engine_power = models.CharField(max_length=100) # muherrik gucu
    production_year = models.IntegerField() # buraxilis ili
    fuel_type = models.ForeignKey(FuelType, on_delete=models.CASCADE) # yanacaq novu
    fuel_efficiency = models.ForeignKey(FuelEfficiency , on_delete=models.CASCADE)  # yanacaq serfi
    gearbox = models.ForeignKey(Gearbox, on_delete=models.CASCADE) # suretler qutusu
    transmitter = models.ForeignKey(Transmitter, on_delete=models.CASCADE)
    seats = models.ForeignKey(Seats , on_delete=models.CASCADE)
    parking_sensor = models.ForeignKey(ParkingSensor, on_delete=models.CASCADE)
    cruise_control = models.ForeignKey(CruiseControl, on_delete=models.CASCADE)
    interior_material = models.ForeignKey(InteriorMaterial, on_delete=models.CASCADE)
    seller = models.CharField( choices=SELLER_CHOICES)
    country = models.ForeignKey(Country , on_delete=models.CASCADE)
    interior_color = models.ForeignKey(InteriorColor , on_delete=models.CASCADE)
    exterior_color = models.ForeignKey(ExteriorColor, on_delete=models.CASCADE)
    car_supplies = models.ManyToManyField(Supply) # tehcizatlar
    other = models.ManyToManyField(Other)
    additional_notes = models.TextField()
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    phone_operator = models.CharField(max_length=10, choices=OPERATOR_CHOICES)
    phone_number = models.CharField(max_length=20)
    vin_code = models.CharField(max_length=100)
    listing_type = models.CharField(max_length=20, choices=LISTING_TYPE_CHOICES)
    trade_options = models.CharField(max_length=10, choices=TRADE_OPTIONS_CHOICES, blank=True, null=True)


    def __str__(self):
        return f"{self.car_brand.name} {self.car_model.name} - {self.condition}"

class CarImage(models.Model):
    advertisement = models.ForeignKey(Advertisement, on_delete=models.CASCADE, related_name='images')
    image = models.FileField(upload_to='car_images/')

