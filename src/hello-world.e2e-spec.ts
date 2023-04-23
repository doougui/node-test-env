import request from 'supertest';
import { app } from '.';

describe('Hello world', () => {
  it('should display hello world message', async () => {
    const response = await request(app).get('/').send();

    expect(response.statusCode).toBe(200);
  })
})