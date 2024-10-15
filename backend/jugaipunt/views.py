from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Jugador
from django.contrib.auth.hashers import check_password

def crear_jugador(request):
    if request.method == 'POST':
        # Aquí puedes procesar los datos del alumno enviados en el cuerpo de la solicitud
        data = json.loads(request.body)
        # Supongamos que tienes un modelo Alumne para guardar los datos en la base de datos
        jugador = Jugador.objects.create(**data)
        # return JsonResponse({'id': alumne.id}, status=201)
        return JsonResponse({'message': 'jugador creat exitosament!'}, status=201)

    return JsonResponse({'error': 'Mètode no permès'}, status=405)

def login_view(request):
    if request.method == 'POST':
        try:
            # processar el cos de la solicitud com a JSON
            data = json.loads(request.body)

            # Obtenir nom y contrasenya del cos de la sol·licitud
            nom = data.get('nom')
            contrasenya = data.get('contrasenya')

            # Buscar el jugador per el nom
            try:
                jugador = Jugador.objects.get(nom=nom)
            except Jugador.DoesNotExist:
                return JsonResponse({'error': 'Jugador no trobat.'}, status=404)

            # Verificar si la contrasenya es correcta
            if check_password(contrasenya, jugador.contrasenya):
                return JsonResponse({'message': f'Benvingut, {jugador.nom}!'}, status=200)
            else:
                return JsonResponse({'error': 'Contrasenyaa incorrecta.'}, status=400)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Sol·licitud invàlida.'}, status=400)

    return JsonResponse({'error': 'Mètode no permès.'}, status=405)