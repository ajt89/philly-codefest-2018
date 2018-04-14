from django.contrib import admin
from django.conf.urls import url

from users import views

urlpatterns = [
    url(r'get_users?$', views.get_users),
]
