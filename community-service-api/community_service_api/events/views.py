from django.shortcuts import render
from django.http import HttpResponse


def list_all_events(request):
    return HttpResponse('all events hurr')


def list_my_events(request):
    return HttpResponse('my events hurr')


def create_event(request):
    return HttpResponse('post request create')


def update_event(request):
    return HttpResponse('post request update')


def register_event(request):
    return HttpResponse('post request register')


def event_detail(request):
    return HttpResponse('event detail')
