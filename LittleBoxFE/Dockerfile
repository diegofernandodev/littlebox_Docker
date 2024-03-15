# Etapa de construcción (builder)
FROM node:18.13 as builder

# Crear el directorio de trabajo en el contenedor
RUN mkdir -p /app

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de configuración
COPY package*.json ./

# Instalar las dependencias del frontend
RUN npm install

# Copiar los archivos del frontend al contenedor
COPY . /app

# Compilar el frontend
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copiar los archivos compilados del frontend desde el contenedor de compilación al directorio de nginx
COPY --from=builder /app/dist/LittleBoxFE /usr/share/nginx/html

# Exponer el puerto en el que nginx sirve los archivos estáticos (por defecto es 80)
EXPOSE 4200

# Comando para iniciar el servidor nginx y servir los archivos estáticos
CMD ["nginx", "-g", "daemon off;"]
