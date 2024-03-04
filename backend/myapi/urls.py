from django.urls import path
from . import views

urlpatterns=[
    path("",views.getDetails),
    path("getres/",views.getResponse),
]