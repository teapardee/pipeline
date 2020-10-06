
from django.shortcuts import render
from rest_framework import viewsets, generics       # add this
from .serializers import PipelineSerializer      # add this
from .models import Pipeline 
from url_filter.integrations.drf import DjangoFilterBackend


class PipelineView(viewsets.ModelViewSet):       # add this
    serializer_class = PipelineSerializer          # add this
    queryset = Pipeline.objects.all()  
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['ticker', 'event', 'source_youtube', 'source_twitter', 'source_other', 'date_of_event', 'date_added', 'primary_category', 'secondary_category', 'significance']



