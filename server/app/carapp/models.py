from django.db import models

class Car(models.Model):
    id = models.IntegerField(primary_key=True)
    salon = models.BooleanField(default=False)
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=20)
    currency = models.CharField(max_length=10)
    capacity = models.CharField(max_length=20)
    year = models.CharField(max_length=4)
    distance = models.CharField(max_length=20)
    location = models.CharField(max_length=100)
    date = models.CharField(max_length=20)
    img = models.CharField(max_length=100)
    leasing = models.BooleanField(default=False)
    credit = models.BooleanField(default=False)
    barter = models.BooleanField(default=False)
    extra_info = models.JSONField(null=True, blank=True)
    basic_info = models.JSONField(null=True, blank=True)
    supplies = models.JSONField(null=True, blank=True)
    other_advantages = models.JSONField(null=True, blank=True)
    note = models.JSONField(null=True, blank=True)