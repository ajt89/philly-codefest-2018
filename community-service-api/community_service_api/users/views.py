from django.shortcuts import render
from django.http import HttpResponse


def list_event_users(request):
    return HttpResponse('event users')


def create_user(request):
    return HttpResponse('post request create')


def update_user(request):
    return HttpResponse('post request update')


def user_detail(request):
    return HttpResponse('user detail')
