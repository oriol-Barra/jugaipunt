from django.urls import path
from . import views

urlpatterns = [
    path('jugador/', views.crear_jugador, name='crear_jugador'),  # Ruta per a crear el jugador
    path('login/', views.login_view, name='login'), #Ruta per a la comprovació del login
]
