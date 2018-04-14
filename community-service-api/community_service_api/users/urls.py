from django.contrib import admin
from django.conf.urls import url

from users import views

urlpatterns = [
    url(r'event_list?$', views.list_event_users),
    url(r'create?$', views.create_user),
    url(r'update?$', views.update_user),
    url(r'detail?$', views.user_detail),
]
