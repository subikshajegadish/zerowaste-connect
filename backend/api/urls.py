from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import RestaurantViewSet, NGOViewSet, FoodPacketViewSet, OrderViewSet

router = DefaultRouter()
router.register(r'restaurants', RestaurantViewSet)
router.register(r'ngos', NGOViewSet)
router.register(r'food-packets', FoodPacketViewSet)
router.register(r'orders', OrderViewSet) 

urlpatterns = [
    path('', include(router.urls)),
]
