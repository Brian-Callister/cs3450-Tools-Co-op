# Generated by Django 2.2.6 on 2020-03-23 18:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tool',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('category', models.CharField(max_length=100)),
                ('times_checked_out', models.IntegerField()),
                ('cost', models.IntegerField()),
                ('is_checked_out', models.BooleanField(default=False)),
                ('date_checked_out', models.DateTimeField(blank='true')),
                ('who_checked_out', models.TextField(blank=True)),
            ],
        ),
    ]
