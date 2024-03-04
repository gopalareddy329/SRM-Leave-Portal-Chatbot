from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from .models import Usersdata
from .serializers import UsersDataSerializer
import json
from rest_framework import status

# Create your views here.

from gradio_client import Client
client = Client("https://1f5b318405709789f0.gradio.live/")

@api_view(['GET'])
def getDetails(request):

    querrydata=Usersdata.objects.all()
    raw_data=UsersDataSerializer(querrydata,many=True)
    return Response(raw_data.data)


@api_view(['GET'])
def getResponse(request):

        question=request.GET.get("question")
        
        
        result =  client.predict(
                question,	# str  in 'query' Textbox component
                api_name="/predict"
        )


    
        
        return Response({"name":result})
            

