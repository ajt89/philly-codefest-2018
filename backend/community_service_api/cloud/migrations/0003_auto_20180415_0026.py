# Generated by Django 2.0.4 on 2018-04-15 00:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cloud', '0002_auto_20180414_2046'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='address_line_one',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='location',
            name='address_line_two',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='location',
            name='city',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='location',
            name='state',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
