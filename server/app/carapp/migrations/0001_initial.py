# Generated by Django 5.0.4 on 2024-04-15 20:39

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Car",
            fields=[
                ("id", models.IntegerField(primary_key=True, serialize=False)),
                ("salon", models.BooleanField(default=False)),
                ("name", models.CharField(max_length=100)),
                ("price", models.CharField(max_length=20)),
                ("currency", models.CharField(max_length=10)),
                ("capacity", models.CharField(max_length=20)),
                ("year", models.CharField(max_length=4)),
                ("distance", models.CharField(max_length=20)),
                ("location", models.CharField(max_length=100)),
                ("date", models.CharField(max_length=20)),
                ("img", models.CharField(max_length=100)),
                ("leasing", models.BooleanField(default=False)),
                ("credit", models.BooleanField(default=False)),
                ("barter", models.BooleanField(default=False)),
                ("extra_info", models.JSONField(blank=True, null=True)),
                ("basic_info", models.JSONField(blank=True, null=True)),
                ("supplies", models.JSONField(blank=True, null=True)),
                ("other_advantages", models.JSONField(blank=True, null=True)),
                ("note", models.JSONField(blank=True, null=True)),
            ],
        ),
    ]