# Generated by Django 2.2.1 on 2020-09-18 16:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pipeline', '0003_pipeline_event'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pipeline',
            old_name='event',
            new_name='ticker',
        ),
    ]
