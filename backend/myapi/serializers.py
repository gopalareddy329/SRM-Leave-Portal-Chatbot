from rest_framework import serializers
from .models import Usersdata


class UsersDataSerializer(serializers.ModelSerializer):
    class Meta:
        model=Usersdata
        fields='__all__'