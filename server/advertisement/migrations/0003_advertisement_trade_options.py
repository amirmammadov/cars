# Generated by Django 5.0.2 on 2024-06-15 13:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('advertisement', '0002_alter_advertisement_seller'),
    ]

    operations = [
        migrations.AddField(
            model_name='advertisement',
            name='trade_options',
            field=models.CharField(blank=True, choices=[('barter', 'Barter'), ('credit', 'Kredit'), ('both', 'Hər İkisi')], max_length=10, null=True),
        ),
    ]
