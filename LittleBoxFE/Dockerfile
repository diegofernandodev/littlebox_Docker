# Establecer la imagen base de Node.js para compilar el frontend
FROM node:18.13 as builder

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json a /app
COPY package*.json ./

# Instalar las dependencias del frontend
RUN npm install

# Copiar el resto de los archivos del frontend a /app
COPY . .

# Compilar el frontend (asegúrate de que este comando coincida con el que usas localmente)
RUN npm run build

# Usar una imagen base ligera para el contenedor de producción
FROM nginx:alpine

# Copiar los archivos compilados del frontend desde el contenedor de compilación al directorio de nginx
COPY --from=builder /app/dist/little-box-fe /usr/share/nginx/html

# Exponer el puerto en el que nginx sirve los archivos estáticos (por defecto es 80)
EXPOSE 4200