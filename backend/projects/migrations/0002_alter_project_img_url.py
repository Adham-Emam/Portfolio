# Generated by Django 5.1.3 on 2024-12-16 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='img_url',
            field=models.ImageField(upload_to=''),
        ),
    ]
