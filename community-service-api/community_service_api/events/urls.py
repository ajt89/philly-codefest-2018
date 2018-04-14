from django.contrib import admin
from django.conf.urls import url

from events import views

urlpatterns = [
    url(r'get_events?$', views.get_events),
]
