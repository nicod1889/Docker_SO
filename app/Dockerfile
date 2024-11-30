# Usa una imagen base de Python #
FROM python:3.9

# Establece el directorio de trabajo #
WORKDIR /usr/src/app

# Copia los archivos del proyecto #
COPY . .

# Instala las dependencias #
RUN pip install -r requirements.txt

# Expone el puerto de Flask #
EXPOSE 5000

# Ejecuta la aplicación #
CMD ["python", "app.py"]
