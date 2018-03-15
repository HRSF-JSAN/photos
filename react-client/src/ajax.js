import $ from 'jquery';

const ajax = {
  get: (cb, id) => {
    $.ajax({
      url: `/pictures/${id}`,
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        cb(data);
      },
    });
  },
};


export default ajax;
