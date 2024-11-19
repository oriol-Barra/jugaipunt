import os
import sys
from django import setup

# Configura la variable de entorno para Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'src.settings')  # Asegúrate de que esta sea la ruta correcta
setup()

# Importa pdoc
import pdoc

# Genera la documentación para el módulo especificado
pdoc.pdoc('jugaripunt', output_dir='docs', html=True)

print("Documentación generada en la carpeta 'docs'.")
