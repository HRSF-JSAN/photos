import React from 'react';
import PropTypes from 'prop-types';
import Picture from './picture';
import ajax from '../ajax';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 101,
      pictures: ['https://s3-us-west-1.amazonaws.com/foodigo/italian2.jpg', 'https://s3-us-west-1.amazonaws.com/foodigo/italian5.jpg', 'https://s3-us-west-1.amazonaws.com/foodigo/italian+1.jpg'],
      comment: ['I have never had a bad experience when I am here', 'This is my go-to resturant', 'We come here 5 times a week it is so good'],
      name: ['Josh Alamillo', 'Nicholas Peyrichou', 'Mat Bagnall'],
    };
  }

  componentDidMount() {
    this.state.id = this.props.id;
    this.getData(this.state.id);
  }

  getData(resturant) {
    const id = resturant;
    ajax.get((data) => {
      this.setState({
        pictures: JSON.parse(data[0].pictures),
        comment: JSON.parse(data[0].comment),
        name: JSON.parse(data[0].name),
      });
    }, id);
  }

  render() {
    return (
      <div>
        <Picture
          pictures={this.state.pictures}
          comment={this.state.comment}
          name={this.state.name}
        />
      </div>);
  }
}

App.propTypes = {
  id: PropTypes.number.isRequired,
};

export default App;
