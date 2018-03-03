import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import App from './components/app';
import Picture from './components/picture';

configure({ adapter: new Adapter() });

describe('App', () => {
  const app = mount(<App />);

  test('App should be stateful', () => {
    expect(app.state('pictures')).toBeDefined();
    expect(app.state('comment')).toBeDefined();
    expect(app.state('name')).toBeDefined();
  });
});

describe('Picture', () => {
  const picture = mount(<Picture name={['Josh Alamillo', 'Nicholas Peyrichou', 'Mat Bagnall']} comment={['I have never had a bad experience when I am here', 'This is my go-to resturant', 'We come here 5 times a week it is so good']} pictures={['https://s3-us-west-1.amazonaws.com/foodigo/italian2.jpg', 'https://s3-us-west-1.amazonaws.com/foodigo/italian5.jpg', 'https://s3-us-west-1.amazonaws.com/foodigo/italian+1.jpg']} />);

  test('Picture should have props', () => {
    expect(picture.props).toBeDefined();
  });

  test('Picture should have picture props with a length of three', () => {
    expect(picture.props().pictures).toBeDefined();
    expect(picture.props().pictures.length).toBe(3);
  });
});
