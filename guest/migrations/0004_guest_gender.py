# Generated by Django 2.0.6 on 2018-07-13 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('guest', '0003_beer'),
    ]

    operations = [
        migrations.AddField(
            model_name='guest',
            name='gender',
            field=models.BooleanField(default=False),
        ),
    ]
