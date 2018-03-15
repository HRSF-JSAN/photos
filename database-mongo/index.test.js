const select = require('./index');
// test for making sure each one has 3 pictures
test('Should all have an array of at least one photo url', (done) => {
  select.selectOne((err, data) => {
    const pictureArr = JSON.parse(data[0].pictures);
    expect(pictureArr.length).toBeGreaterThan(0);
    done();
  }, 1);
});
// tests a select for a single resturant id
test('Should all have a comment', (done) => {
  select.selectOne((err, data) => {
    const checkComment = data[0].comment;
    expect(checkComment !== undefined).toBe(true);
    done();
  }, 50);
});
