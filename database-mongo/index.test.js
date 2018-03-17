const select = require('./index');
// test for making sure each one has 3 pictures
test('Should all have an array of at least one photo url', (done) => {
  select.selectOne(1)
    .then((data) => {
      const pictureArr = JSON.parse(data.pictures);
      expect(pictureArr.length).toBeGreaterThan(0);
      done();
    })
    .catch(err => done(err));
});
// tests a select for a single resturant id
test('Should all have a comment', (done) => {
  select.selectOne(50)
    .then((data) => {
      const checkComment = data.comment;
      expect(checkComment !== undefined).toBe(true);
      done();
    })
    .catch(err => done(err));
});
