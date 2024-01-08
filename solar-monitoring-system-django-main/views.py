# views.py
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def get_data(request):
    data = {
        "voltage": 10,
        "current": 5,
        "solar_power": 50,
    }
    return JsonResponse(data)

