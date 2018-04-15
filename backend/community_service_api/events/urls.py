from django.contrib import admin
from django.conf.urls import url

from events import views

urlpatterns = [
    url(r'all?$', views.list_all_events),
    url(r'my?$', views.list_my_events),
    url(r'create?$', views.create_event),
    url(r'update?$', views.update_event),
    url(r'register?$', views.register_event),
    url(r'detail?$', views.event_detail),
]
