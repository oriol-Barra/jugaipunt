# Generated by Django 5.1.1 on 2024-10-10 15:06

from django.db import migrations, models # type: ignore

class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='Jugador',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nom', models.CharField(max_length=50)),
                ('cognoms', models.CharField(max_length=100)),
                ('edat', models.IntegerField()),
                ('email', models.EmailField(max_length=254)),
                ('contrasenya', models.CharField(max_length=128)),
            ],
        ),
    ]
