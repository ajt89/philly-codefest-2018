from django.shortcuts import render
from django.http import HttpResponse


def get_users(request):
    return HttpResponse('users hurr')
