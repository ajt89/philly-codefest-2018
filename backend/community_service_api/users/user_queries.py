from rest_framework.authtoken.models import Token

from django.contrib.auth.models import User


def verify_token(username, token):
    return Token.objects.filter(user__username=username, key=token).exists()
