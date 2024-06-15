from django.db import models
from moto4.utils.base import BaseModel
from django.contrib.postgres.fields import ArrayField
from django.core.validators import MinValueValidator, MaxValueValidator



class Country(BaseModel):
    name = models.CharField(max_length=100, unique=True)

    def _str_(self):
        return self.name
    
    class Meta:
        verbose_name = 'Country'
        verbose_name_plural = 'Countries'
    

class Company(BaseModel):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='posters/', blank=True, null=True)
    operating_country = models.ManyToManyField(Country, related_name='companies')
    phone = ArrayField(models.CharField(max_length=20), blank=True)
    working_hours = models.JSONField(default=dict, blank=True, null=True)
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)], null=True, blank=True)

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def _str_(self):
        return self.name
    

class PhoneNumber(BaseModel):
    company = models.ForeignKey(Company, related_name='phone_numbers', on_delete=models.CASCADE)
    number = models.CharField(max_length=20)

    class Meta:
        verbose_name = 'Number'
        verbose_name_plural = 'Numbers'


    def _str_(self):
        return self.number