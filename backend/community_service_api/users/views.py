import json

from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

from users.user_queries import verify_token


def list_event_users(request):
    return HttpResponse('event users')


def create_user(request):
    return HttpResponse('post request create')


def update_user(request):
    return HttpResponse('post request update')


def user_detail(request):
    return HttpResponse('user detail')


@csrf_exempt
def signup(request):
    if request.method == 'POST':
        if username and password:
            user = authenticate(username=username, password=password)
            status = {'status': 0}
        else:
            status = {
                'status': 1,
                'error': 'username or password not passed',
            }
    else:
        status = {
            'status': 1,
            'error': 'Not a POST Request'
        }
    return HttpResponse(json.dumps(status), content_type='application/json')
