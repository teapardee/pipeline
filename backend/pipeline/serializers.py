from rest_framework import serializers
from .models import Pipeline


class PipelineSerializer(serializers.ModelSerializer):
    class Meta:
       model = Pipeline
       fields = ('ticker', 'event', 'source_youtube', 'source_twitter', 'source_other', 'date_of_event', 'date_added', 'primary_category', 'secondary_category', 'significance')