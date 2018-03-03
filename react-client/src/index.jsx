import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

// proxy will pass number in here
ReactDOM.render(<App id={102} />, document.getElementById('app'));
