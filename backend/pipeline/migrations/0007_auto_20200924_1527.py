# Generated by Django 2.2.1 on 2020-09-24 19:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pipeline', '0006_auto_20200924_1523'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pipeline',
            old_name='category',
            new_name='primary_category',
        ),
        migrations.RenameField(
            model_name='pipeline',
            old_name='sub_category',
            new_name='secondary_category',
        ),
    ]
