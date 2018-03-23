const request = require('supertest');
const app = require('./index.js');

// tests the basic connection between the server
describe('Test the root path', () => {
  test('It should respond to the GET method', (done) => {
    request(app)
      .get('/pictures/123')
      .expect(200)
      .end(err => (
        err ? done(err) : done()
      ));
  });
});

test('responds with 200 success code for GET requests', (done) => {
  request(app)
    .get('/pictures/101')
    .expect(200)
    .end((err) => {
      if (err) {
        done(err);
      } else {
        done();
      }
    });
});

test('responds with 400 error code for bad GET requests', (done) => {
  request(app)
    .get('/somethingRandom/101')
    .expect(400)
    .end((err) => {
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
    .expect(400)
    .end((err) => {
      if (err) {
        done(err);
      } else {
        done();
      }
    });
});
