from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from quickstart.serializers import QuoteSerializer
from quickstart.models import Quote

class QuoteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows quotes to be viewed.
    """
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer

def random_quote(self):
    quotes = Quote.objects.order_by('?').first()
    return HttpResponse(quotes)

def zach_wants_to_know(self):
    return HttpResponse("gotcha")