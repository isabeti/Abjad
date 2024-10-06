# Generated by Django 4.2.3 on 2024-05-29 08:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='EnglishWord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('word', models.CharField(max_length=200)),
                ('abjad_hebrew', models.IntegerField(default=0)),
                ('abjad_english', models.IntegerField(default=0)),
                ('abjad_simple', models.IntegerField(default=0)),
                ('search', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'english_word',
            },
        ),
        migrations.CreateModel(
            name='PersianWord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('word', models.CharField(max_length=200)),
                ('kabir_abjad', models.IntegerField(default=0)),
                ('saghir_abjad', models.IntegerField(default=0)),
                ('vasit_abjad', models.IntegerField(default=0)),
                ('search', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'persian_word',
            },
        ),
    ]
