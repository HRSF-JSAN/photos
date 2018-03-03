import $ from 'jquery';

const ajax = {
  get: (cb, id) => {
    $.ajax({
      url: `/pictures/${id}`,
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log(data)
        cb(data);
      },
      error: (err) => {
        console.error(err); // eslint-disable-line
      },
    });
  },
};


export default ajax;
