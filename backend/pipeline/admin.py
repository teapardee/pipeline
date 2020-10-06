from django.contrib import admin
from .models import Pipeline # add this

class PipelineAdmin(admin.ModelAdmin):  # add this
    list_display = ('ticker', 'event', 'source_youtube', 'source_twitter', 'source_other', 'date_of_event', 'date_added', 'primary_category', 'secondary_category', 'significance') # add this

# Register your models here.
admin.site.register(Pipeline, PipelineAdmin) # add this