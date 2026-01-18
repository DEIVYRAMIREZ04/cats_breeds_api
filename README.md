<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
</p>

# Cats Breeds API

API REST para la gestión de razas y características de gatos, desarrollada con NestJS y TypeORM.

---

## 🚀 Imagen Docker

La imagen Docker de este proyecto está disponible en Dockerhub:

**[Enlace a la imagen en Dockerhub](https://hub.docker.com/r/USUARIO/REPO)**

> Reemplaza el enlace anterior con el tuyo tras subir la imagen.

---

## 🐳 Ejecución rápida con Docker

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/USUARIO/cats_breeds_api.git
   cd cats_breeds_api
   ```

2. **Configura las variables de entorno:**
   - Edita el archivo `docker.env` con tus credenciales de base de datos.

3. **Construye la imagen Docker:**
   ```bash
   docker build -t cats_breeds_api:latest .
   ```

4. **Ejecuta el contenedor:**
   ```bash
   docker run --env-file docker.env -p 3000:3000 cats_breeds_api:latest
   ```

5. **Accede a la API:**
   - Swagger UI: [http://localhost:3000/api](http://localhost:3000/api)
   - Endpoints disponibles: `/cats`, `/cats/:id`, etc.

---

## 🧪 Tests

Para ejecutar los tests funcionales/end-to-end:

```bash
npm run test:e2e
```

---

## 📚 Endpoints principales

- `GET /cats` — Lista todos los gatos
- `POST /cats` — Crea un nuevo gato
- `GET /cats/:id` — Obtiene un gato por ID
- `PATCH /cats/:id` — Actualiza un gato
- `DELETE /cats/:id` — Elimina un gato

Consulta la documentación Swagger para detalles de los parámetros y respuestas.

---

## 📝 Notas

- Asegúrate de tener una base de datos MySQL disponible y configurada en `docker.env`.
- Puedes usar `docker-compose.yml` para levantar servicios auxiliares si lo requieres.

---

## 📄 Licencia

MIT
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
