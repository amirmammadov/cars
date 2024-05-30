from django.contrib import admin
from .models import Company, Country , PhoneNumber

admin.site.register(Company)
admin.site.register(Country)
admin.site.register(PhoneNumber)