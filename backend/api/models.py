from django.db import models

# Create your models here.
# api/models.py
from django.db import models

class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    address = models.TextField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    
    # ⚖️ Verification Fields
    pan_card = models.CharField(max_length=10, unique=True)
    gst_number = models.CharField(max_length=15, blank=True, null=True)
    fssai_license = models.CharField(max_length=14, blank=True, null=True)
    no_fssai_license = models.BooleanField(default=False)  # for users to declare explicitly
    
    # 🏦 Bank Account
    bank_account_number = models.CharField(max_length=20)
    ifsc_code = models.CharField(max_length=11)
    bank_name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class NGO(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    address = models.TextField()
    latitude = models.FloatField()
    longitude = models.FloatField()

    # 🧾 Verification Documents
    pan_number = models.CharField(max_length=10, unique=True)

    # 🏦 Bank Info
    bank_account_number = models.CharField(max_length=20)
    ifsc_code = models.CharField(max_length=11)
    bank_name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class FoodPacket(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_claimed = models.BooleanField(default=False)


class Order(models.Model):
    ngo = models.ForeignKey(NGO, on_delete=models.CASCADE)
    food_packet = models.ForeignKey(FoodPacket, on_delete=models.CASCADE)
    quantity_claimed = models.PositiveIntegerField()
    ordered_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.ngo.name} ordered {self.quantity_claimed} from {self.food_packet.restaurant.name}"



