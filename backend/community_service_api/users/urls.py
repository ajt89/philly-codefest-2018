from django.contrib import admin
from django.conf.urls import url
from rest_framework.authtoken import views as rest_framework_views

from users import views

urlpatterns = [
    url(r'event_list?$', views.list_event_users),
    url(r'create?$', views.create_user),
    url(r'update?$', views.update_user),
    url(r'detail?$', views.user_detail),
    url(r'signup?$', views.signup),
    url(r'get_token?$', rest_framework_views.obtain_auth_token),
]
