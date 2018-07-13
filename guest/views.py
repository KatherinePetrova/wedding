from django.shortcuts import render
from rest_framework.response import Response
from guest.models import Beer
from guest.models import Guest
from guest.serializers import BeerSerializer
from guest.serializers import GuestSerializer
from rest_framework.decorators import api_view

def index(request):
    return render(request, 'index.html', {})

@api_view(['GET'])
def guestInf(request):
    user = request.user
    guest = Guest.objects.filter(user=user)[0]
    seri = GuestSerializer(guest, many=True)
    return Response(seri.data)

@api_view(['GET'])
def getInvite(request):
    user = request.user
    guest = Guest.objects.filter(user=user).values()[0]
    guest.invite = True
    guest.save()
    seri = GuestSerializer(guest, many=True)
    return Response(seri.data)

@api_view(['GET'])
def guests(request):
    user = request.user
    print(user.username);
    queryset = Guest.objects.all()
    seri = GuestSerializer(queryset, many=True)
    return Response(seri.data)