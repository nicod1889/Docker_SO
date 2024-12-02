# Imagen de Python
FROM python:3.9

# Directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos del proyecto
COPY . .

# Dependencias
RUN pip install -r requirements.txt

# Expone el puerto de Flask
EXPOSE 5000

# Ejecuta la aplicación
CMD ["python", "app.py"]
