from django.contrib import admin
from .models import Jugador
from .models import Lliga
from .models import Partida



# Register your models here.

admin.site.register(Jugador)
admin.site.register(Lliga)
admin.site.register(Partida)


