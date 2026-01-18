import { webcrypto } from 'crypto';

(global as any).crypto = webcrypto;

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Cats API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule =
      await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  let catId: number;

    it('/cats (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/cats')
      .send({
        name: 'Michi',
        breed: 'Siamés',
        temperament: 'Cariñoso',
        characteristic: 'Le gusta dormir',
      })
      .expect(201);

    expect(response.body).toHaveProperty('id');
    catId = response.body.id;
  });



  it('/cats (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/cats')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });


    it('/cats/:id (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get(`/cats/${catId}`)
      .expect(200);

    expect(response.body.id).toBe(catId);
  });

    it('/cats/:id (PATCH)', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/cats/${catId}`)
      .send({ name: 'Garfield' })
      .expect(200);

    expect(response.body.name).toBe('Garfield');
  });


    it('/cats/:id (DELETE)', async () => {
    await request(app.getHttpServer())
      .delete(`/cats/${catId}`)
      .expect(200);
  });


    it('/cats/:id (DELETE 404)', async () => {
    await request(app.getHttpServer())
      .delete('/cats/99999')
      .expect(404);
  });

  
});
