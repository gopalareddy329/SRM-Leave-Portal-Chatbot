from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from .models import Usersdata
from .serializers import UsersDataSerializer
from time import sleep

# Create your views here.

from gradio_client import Client
#client = Client("https://1f5b318405709789f0.gradio.live/")

@api_view(['GET'])
def getDetails(request):

    querrydata=Usersdata.objects.all()
    raw_data=UsersDataSerializer(querrydata,many=True)
    return Response(raw_data.data)


@api_view(['GET'])
def getResponse(request):
        try:
                query=request.GET.get("question")
                if not query:
                       raise ValueError("Please provide a valid query.")
                # result =  client.predict(
                #         question,	# str  in 'query' Textbox component
                #         api_name="/predict"
                # )
                result="""
                        Sure, here's how to apply for On Duty Leave:

                        **Step 1: Access the SRMIST Portal**

                        * Log in to the SRMIST portal with your credentials.
                        * If you haven't registered yet, you can create an account by providing your email address and a password.

                        **Step 2: Navigate to the Leave section**

                        * Once logged in, navigate to the "Leave" section on the portal.
                        * Alternatively, you can search for "Leave" in the search bar.

                        **Step 3: Select "On Duty Leave"**

                        * From the available leave types, select "On Duty."

                        **Step 4: Enter your details**

                        * Provide the following information:
                        * Start date and time
                        * End date and time
                        * Reason for leave (optional)
                        * Supporting documents (if required)

                        **Step 5: Submit your request**

                        * Click on "Submit" to submit your leave request.

                        **Step 6: Track your leave status**

                        * You can track the status of your leave request in the "Leave Requests" section of the portal.

                        **Additional notes:**

                        * Employees are allowed to avail a maximum of 10
                        """
                sleep(3)

                return Response({"response":result},status=200)
        except Exception as e:
               error_message=str(e)
               return Response({"error": error_message}, status=400)
            

