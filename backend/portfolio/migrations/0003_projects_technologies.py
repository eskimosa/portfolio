# Generated by Django 5.1.2 on 2024-10-24 20:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_projects_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='technologies',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]
