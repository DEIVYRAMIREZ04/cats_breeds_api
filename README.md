# Cats Breeds API 🐱

API REST para la gestión de razas y características de gatos, desarrollada con **NestJS**, **TypeORM**, y **MySQL**, completamente dockerizada.

---

## 🎯 Objetivo del Proyecto

- Implementar las últimas mejoras del proyecto y Dockerizarlo.  
- Documentar las rutas del proyecto con Swagger.  
- Añadir tests funcionales para todos los endpoints.  
- Crear una imagen de Docker y subirla a Docker Hub.

---

## 🛠 Tecnologías

- Node.js 20 + NestJS  
- TypeORM  
- MySQL 8  
- Docker / Docker Compose  
- Jest (E2E Tests)  
- Swagger (Documentación)

---

## 📌 Nota sobre routers

En **NestJS** no usamos routers de la forma típica de Express (`adoption.router.js`) porque NestJS utiliza un **sistema de módulos y controladores**:

- Cada módulo (`CatsModule`, para este caso) define sus rutas mediante **controllers**.  
- Cada **controller** mapea rutas HTTP (`GET`, `POST`, `PATCH`, `DELETE`) directamente a métodos de clase.  

> Por esto, aunque el enunciado habla de `adoption.router.js`, en nuestro proyecto los endpoints de adopción se manejan en el **CatsModule** y su **CatsController**.

---

## ✅ Requisitos previos

- Docker  
- Docker Compose  
- Node.js (opcional para desarrollo local)  
- Git

---

## 🚀 Clonar y ejecutar el proyecto

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/DEIVYRAMIREZ04/cats_breeds_api.git
npm init
cd cats_breeds_api

---

 2️⃣ Levantar contenedores con Docker Compose

docker compose up --build -d
Esto levantará dos contenedores: mysql_cats y cats_api.

El contenedor cats_api depende de que mysql_cats esté listo (healthcheck configurado).


3️⃣ Acceder a la API
API principal: http://localhost:3000

Documentación Swagger: http://localhost:3000/api

🧪 Ejecutar tests funcionales (E2E)

docker compose exec api npm run test:e2e
Todos los tests deberían pasar (6 tests para Cats API):

POST /cats

GET /cats

GET /cats/:id

PATCH /cats/:id

DELETE /cats/:id

DELETE /cats/:id 404

🐳 Imagen en Docker Hub
Imagen publicada: https://hub.docker.com/r/deivramirez/cats-breeds-api

Probar desde otra máquina:


docker pull deivramirez/cats-breeds-api:latest
docker run -p 3000:3000 deivramirez/cats-breeds-api:latest
Nota:
Con solo la imagen Docker no es suficiente para levantar el proyecto completo, ya que la API depende de una base de datos.

Para este proyecto se utiliza Docker Compose como orquestador, el cual define:

la API

la base de datos

las variables de entorno

la red entre contenedores

El archivo docker-compose.yml no forma parte de la imagen Docker, por lo que debe obtenerse por separado (por ejemplo, clonando el repositorio o copiando únicamente dicho archivo).


✅ Criterios de entrega cubiertos
Tests funcionales: Todos los endpoints del módulo de Cats (adopciones) están cubiertos y verificados.

Dockerfile: Permite construir la imagen de manera reproducible.

Docker Hub: Imagen subida y accesible públicamente.

Documentación: Swagger listo y ReadMe con instrucciones completas.

Variables de entorno: Incluidas para que cualquier usuario pueda levantar el proyecto fácilmente.

⚡ Comandos útiles
Comando	Descripción
docker compose up --build	Levantar todo
docker compose up -d	Levantar en segundo plano
docker compose down	Detener todo
docker compose exec cats_api sh	Entrar al contenedor del API
docker compose logs -f cats_api	Ver logs

👨‍💻 Autor
Deivy Johan Ramírez


