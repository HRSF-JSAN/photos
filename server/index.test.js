const request = require('supertest');
const app = require('./index.js');

// tests the basic connection between the server
describe('Test the root path', () => {
  test('It should respond to the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

test('responds with 200 sucess code for GET requests', (done) => {
  request(app)
    .get('/pictures/101')
    .expect(200).end((err) => {
      if (err) {
        done(err);
      } else {
        done();
      }
    });
});

test('responds with 404 error code for bad GET requests', (done) => {
  request(app)
    .get('/somethingRandom/101')
    .expect(404).end((err) => {
      if (err) {
        done(err);
      } else {
        done();
      }
    });
});

test('doesn\'t accept post requests', (done) => {
  request(app)
    .post('/pictures/101')
    .expect(404).end((err) => {
      if (err) {
        done(err);
      } else {
        done();
      }
    });
});
