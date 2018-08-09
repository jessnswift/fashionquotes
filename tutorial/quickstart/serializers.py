# from django.contrib.auth.models import User, Group
from rest_framework import serializers

from .models import Quote

class QuoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Quote
        fields = ('url', 'quote', 'source', 'year')
        http_method_names = ['get', 'post', 'put', 'delete']