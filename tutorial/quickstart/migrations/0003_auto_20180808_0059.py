# Generated by Django 2.0.7 on 2018-08-08 00:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quote',
            name='year',
            field=models.IntegerField(blank=True, default='', null=True),
        ),
    ]