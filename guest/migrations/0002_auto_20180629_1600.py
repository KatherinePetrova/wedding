# Generated by Django 2.0.6 on 2018-06-29 10:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('guest', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='guest',
            old_name='accInv',
            new_name='invite',
        ),
    ]