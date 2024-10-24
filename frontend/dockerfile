# Usa la imagen oficial de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build  # Asegúrate de que este comando esté en package.json

# Expone el puerto donde la aplicación estará corriendo
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
