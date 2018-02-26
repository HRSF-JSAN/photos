import React from 'react';
import ReactDOM from 'react-dom';
import Picture from './components/picture.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
        <Picture />
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
