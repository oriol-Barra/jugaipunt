from django.db import models

# Create your models here.
class Jugador(models.Model):
    id = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=50)
    cognoms=models.CharField(max_length=100)
    edat = models.IntegerField()
    email = models.EmailField()
    contrasenya = models.CharField(max_length=128)  

    def __str__(self):
        return self.nom