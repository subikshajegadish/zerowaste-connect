# api/serializers.py

from rest_framework import serializers
from .models import Restaurant, NGO, FoodPacket, Order

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'

class NGOSerializer(serializers.ModelSerializer):
    class Meta:
        model = NGO
        fields = '__all__'

class FoodPacketSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodPacket
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

    def validate(self, data):
        food_packet = data['food_packet']
        quantity = data['quantity_claimed']
        if quantity > food_packet.quantity:
            raise serializers.ValidationError("Not enough food packets available.")
        return data

    def create(self, validated_data):
        food_packet = validated_data['food_packet']
        quantity = validated_data['quantity_claimed']
        food_packet.quantity -= quantity
        if food_packet.quantity == 0:
            food_packet.is_claimed = True
        food_packet.save()
        return super().create(validated_data)
