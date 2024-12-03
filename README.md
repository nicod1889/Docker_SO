# Trabajo Final: Aplicación Web con Docker

Este trabajo práctico consiste en desarrollar y desplegar una aplicación web que incluye una interfaz en Python, servida por Apache HTTP Server, y una base de datos MongoDB para almacenar información sobre juegos de mesa. 

El proyecto utiliza Docker para gestionar los servicios y garantizar un entorno consistente.

## Estructura del Proyecto
```plaintext
📦 proyecto 
├── 📂 app 
│   ├── 📂 static
│   │   ├── 📂 css
│   │   │   ├── index.css
│   │   │   └── juegos.css
│   │   └── 📂 js
│   │       ├── juegos.js
│   │       └── utils.js
│   ├── 📂 templates
│   │   ├── 📂 partials
│   │   │   ├── alert.html
│   │   │   ├── createGame.html
│   │   │   ├── deleteGame.html
│   │   │   ├── editGame.html
│   │   │   ├── footer.html
│   │   │   └── header.html
│   │   ├── index.html
│   │   └── juegos.html
│   ├── Dockerfile
│   ├── requirements.txt 
│   └── app.py 
├── 📂 mongo-init 
│   └── init.js 
├── docker-compose.yml 
└── README.md
```

### Descripción de Carpetas

- **app/**: Contiene los archivos de la aplicación Python, incluyendo el `Dockerfile` y el script principal `app.py`.
- **mongo-init/**: Contiene el script de inicialización para la base de datos MongoDB.
- **docker-compose.yml**: Archivo de configuración para definir y conectar los servicios Docker.

---

## Requisitos Previos

- [Docker](https://www.docker.com/) instalado.
- [Docker Compose](https://docs.docker.com/compose/) instalado.
- Conexión a Internet para descargar imágenes base de Docker.

---

## Configuración y Despliegue

### 1. Construir y Levantar los Servicios

Para construir y levantar los contenedores, ejecutar:

```bash
docker-compose up --build
```
---

## Redes
Ambos contenedores están conectados a la red app-network, facilitando la comunicación interna.

---

## Persistencia de Datos
Los datos de MongoDB se almacenan en el volumen mongo-data, lo que garantiza que los datos no se pierdan al detener o reiniciar los contenedores.
