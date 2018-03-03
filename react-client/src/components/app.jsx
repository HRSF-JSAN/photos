import React from 'react';
import PropTypes from 'prop-types';
import Picture from './picture';
import ajax from '../ajax';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: ['https://s3-us-west-1.amazonaws.com/foodigo/italian2.jpg', 'https://s3-us-west-1.amazonaws.com/foodigo/italian5.jpg', 'https://s3-us-west-1.amazonaws.com/foodigo/italian+1.jpg'],
      comment: ['Wow food was so good'],
      name: ['Airyque Ervin'],
    };
  }

  componentDidMount() {
    this.getData(this.props.id);
  }

  getData(resturant) {
    const id = resturant;
    ajax.get((data) => {
      this.setState({
        pictures: JSON.parse(data[0].pictures),
        comment: data[0].comment,
        name: data[0].name,
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
