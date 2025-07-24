from django.shortcuts import render
from rest_framework import viewsets
from .models import Restaurant, NGO, FoodPacket, Order
from .serializers import RestaurantSerializer, NGOSerializer, FoodPacketSerializer, OrderSerializer
# Create your views here.


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

class NGOViewSet(viewsets.ModelViewSet):
    queryset = NGO.objects.all()
    serializer_class = NGOSerializer

class FoodPacketViewSet(viewsets.ModelViewSet):
    queryset = FoodPacket.objects.all()
    serializer_class = FoodPacketSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
