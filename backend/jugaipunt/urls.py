from django.urls import path
from . import views

urlpatterns = [
    path('jugador', views.crear_jugador, name='crear_jugador/'),  # Ruta per a crear el jugador
    path('login', views.login_view, name='login/'),  # Ruta per a la comprovació del login
    path('logout', views.logout_view, name='logout/'),  # Ruta per a la comprovació del login
    path('noutorneig', views.crear_torneig, name='creartorneig/'),  # Ruta per a la creació d'un nou torneig
    path('dashboard', views.crear_torneig, name='infoJugador/'),  # Ruta per a la creació d'un nou torneig


]
