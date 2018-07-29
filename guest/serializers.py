from rest_framework import serializers
from guest.models import Beer
from guest.models import Guest

class BeerSerializer(serializers.ModelSerializer):
     class Meta:
        model = Beer
        fields = ('id', 'name')

class GuestSerializer(serializers.ModelSerializer):
     class Meta:
        model = Guest
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'invite', 'gender')