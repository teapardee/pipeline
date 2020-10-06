from django.db import models
    # Create your models here.

# add this
class Pipeline(models.Model):
    ticker = models.CharField(max_length=250, default="null")
    event = models.CharField(max_length=250, default="+")
    source_youtube = models.CharField(max_length=250, default="false")
    source_twitter = models.CharField(max_length=250, default="false")
    source_other = models.CharField(max_length=250, default="false")
    date_of_event = models.CharField(max_length=250, default="+")
    date_added = models.CharField(max_length=250, default="+")
    primary_category = models.CharField(max_length=250, default="+")
    secondary_category = models.CharField(max_length=250, default="+")
    significance = models.CharField(max_length=250, default="+")
def _str_(self):
    return self.title