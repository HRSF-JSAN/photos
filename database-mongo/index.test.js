const select = require('./index');
// test for the entire set of data
test('data length should be 100', (done) => {
  select.selectAll((err, data) => {
    expect(data.length).toBe(100);
    done();
  });
});
// test for making sure each one has 3 pictures
test('Should all have an array of 3 picture urls', (done) => {
  select.selectAll((err, data) => {
    const pictureArr = JSON.parse(data[0].pictures);
    expect(pictureArr.length).toBe(3);
    done();
  });
});
// tests a select for a single resturant id
test('Should have the same 3 picture urls on every request', (done) => {
  select.selectAll((err, data) => {
    const pictureUrls = JSON.parse(data[50].pictures);
    expect(pictureUrls + '').toBe('https://s3-us-west-1.amazonaws.com/foodigo/pizza1.jpg,https://s3-us-west-1.amazonaws.com/foodigo/pizza7.jpg,https://s3-us-west-1.amazonaws.com/foodigo/pizza11.jpg');
    done();
  });
});
