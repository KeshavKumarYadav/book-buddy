from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
    # id = serializers.IntegerField()
    # name = serializers.CharField(max_length=255)
    # price = serializers.DecimalField(max_digits=7, decimal_places=2)