from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    user = models.ForeignKey(User,on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    # image = 
    brand = models.CharField(max_length=100, null=True, blank=True)
    category = models.CharField(max_length=150, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=1,null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    mrp = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    cratedAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name