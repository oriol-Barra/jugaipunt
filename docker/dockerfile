# Usa una imagen base de Python
FROM python:3.11
# Instala las dependencias del sistema
RUN apt-get update && apt-get install -y \
    gdal-bin \
    libgdal-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
# Configura las variables de entorno para GDAL
ENV CPLUS_INCLUDE_PATH=/usr/include/gdal
ENV C_INCLUDE_PATH=/usr/include/gdal

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /code

# Copia el archivo de requisitos y lo instala
COPY /backend/requirements.txt /code/

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto del código de la aplicación
COPY . /code/

# Expone el puerto 8000 para el servidor de Django
EXPOSE 8000

# Comando para ejecutar la aplicación Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
