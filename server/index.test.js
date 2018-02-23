const request = require('supertest');
const app = require('./index.js');

// tests the basic connection between the server
describe('Test the root path', () => {
  test('It should respond to the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
