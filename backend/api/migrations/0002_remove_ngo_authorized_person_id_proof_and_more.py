# Generated by Django 5.2.4 on 2025-07-24 07:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ngo',
            name='authorized_person_id_proof',
        ),
        migrations.RemoveField(
            model_name='ngo',
            name='certificate_12a',
        ),
        migrations.RemoveField(
            model_name='ngo',
            name='certificate_80g',
        ),
        migrations.RemoveField(
            model_name='ngo',
            name='registration_certificate',
        ),
    ]
