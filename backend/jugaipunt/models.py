from django.db import models
from django.contrib.auth.models import User  # Si estás utilizant el model d'usuari de Django

# Model que representa un jugador
class Jugador(models.Model):
    id = models.AutoField(primary_key=True)  # Identificador únic per a cada jugador
    nom = models.CharField(max_length=50)  # Nom del jugador (max. 50 caràcters)
    cognoms = models.CharField(max_length=100)  # Cognoms del jugador (max. 100 caràcters)
    edat = models.IntegerField()  # Edat del jugador (sencer)
    email = models.EmailField()  # Correu electrònic del jugador (format de correu electrònic)
    contrasenya = models.CharField(max_length=128)  # Contrasenya del jugador (max. 128 caràcters)
    session_token = models.CharField(max_length=255, blank=True, null=True)  # Camp opcional per al token de sessió
    admin = models.BooleanField(default=False)  # per controlar si es o no administrador
    num_federat = models.IntegerField(default=0)  # numero de federat del jugador (numeric)

    def __str__(self):
        return f"{self.nom} - {self.cognoms}"  # Retorna el nom del jugador com a representació en cadena

# Model que representa una lliga
class Lliga(models.Model):
    nomLliga = models.CharField(max_length=50)  # Nombre de la liga
    dataInici = models.DateField()  # Fecha de inicio
    dataFi = models.DateField()  # Fecha de fin
    tipusTorneig = models.BooleanField(default=True)  # Tipo de torneo (True/False)
    usuariAdmin = models.ForeignKey(User, on_delete=models.CASCADE)  # ID del usuario administrador
    llistaJugadors = models.ManyToManyField(Jugador, related_name="lligues")  # Relación con jugadores
    resultat = models.CharField(max_length=100, blank=True, null=True)  # ID del ganador de la liga (opcional)

    def __str__(self):
        return f"{self.nomLliga} - {self.dataInici} a {self.dataFi}"
    
class Partida(models.Model):
    lliga = models.ForeignKey(Lliga, on_delete=models.CASCADE, related_name="partides")
    jugador1 = models.ForeignKey(Jugador, on_delete=models.CASCADE, related_name="partides_jugador1")
    jugador2 = models.ForeignKey(Jugador, on_delete=models.CASCADE, related_name="partides_jugador2")

    def __str__(self):
        return f"{self.jugador1.nom} vs {self.jugador2.nom} - Lliga: {self.lliga.nomLliga}"

