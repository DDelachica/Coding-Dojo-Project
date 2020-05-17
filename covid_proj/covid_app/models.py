from django.db import models


class Country(models.Model):
    name = models.CharField(max_length=50)
    pop = models.CharField(max_length=50)
    infection_rate = models.CharField(max_length=5)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

class States(models.Model):
    name = models.CharField(max_length=50)
    abbr = models.CharField(max_length=2)
    infection_rate = models.CharField(max_length=5)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)