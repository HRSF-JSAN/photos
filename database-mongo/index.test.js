const select = require('./index');

test('data length should be 100', (done) => {
  select.selectAll((err, data) => {
    expect(data.length).toBe(100);
    done();
  });
});
