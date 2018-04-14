from django.shortcuts import render
from django.http import HttpResponse


def get_events(request):
    return HttpResponse('events hurr')
