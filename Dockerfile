# Usar la imagen oficial de Nginx
FROM nginx:latest

# Copiar los archivos de build de React a la carpeta de Nginx
COPY ./dist /usr/share/nginx/html

# Copiar el archivo de configuración de Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80 para acceder a la aplicación
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]