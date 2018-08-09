# Generated by Django 2.0.7 on 2018-08-08 00:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Quote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quote', models.TextField(default='')),
                ('source', models.TextField(default='')),
                ('year', models.IntegerField(blank=True, default='')),
            ],
        ),
    ]
