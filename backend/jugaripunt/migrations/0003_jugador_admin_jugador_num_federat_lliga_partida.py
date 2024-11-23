# Generated by Django 5.1.1 on 2024-11-07 11:08

import django.db.models.deletion # type: ignore
from django.conf import settings # type: ignore
from django.db import migrations, models # type: ignore

class Migration(migrations.Migration):

    dependencies = [
        ('jugaripunt', '0002_jugador_session_token'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='jugador',
            name='admin',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='jugador',
            name='num_federat',
            field=models.IntegerField(default=0),
        ),
        migrations.CreateModel(
            name='Lliga',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomLliga', models.CharField(max_length=50)),
                ('dataInici', models.DateField()),
                ('dataFi', models.DateField()),
                ('tipusTorneig', models.BooleanField(default=True)),
                ('resultat', models.CharField(blank=True, max_length=100, null=True)),
                ('llistaJugadors', models.ManyToManyField(related_name='lligues', to='jugaripunt.jugador')),
                ('usuariAdmin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Partida',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('resultat', models.CharField(blank=True, choices=[('VJ1', 'Victòria Jugador 1'), ('VJ2', 'Victòria Jugador 2'), ('EMP', 'Empat')], max_length=3, null=True)),
                ('jugador1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='partides_jugador1', to='jugaripunt.jugador')),
                ('jugador2', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='partides_jugador2', to='jugaripunt.jugador')),
                ('lliga', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='partides', to='jugaripunt.lliga')),
            ],
        ),
    ]
