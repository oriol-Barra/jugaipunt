from django.urls import path
from . import views

urlpatterns = [
    path('', views.crear_jugador, name='crear_jugador'),  # Ruta per a crear el jugador
    path('', views.login_view, name='login'), #Ruta per a la comprovació del login
    path('', views.login_view, name='logout'), #Ruta per a la comprovació del login

    
]
