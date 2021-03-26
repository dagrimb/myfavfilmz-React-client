import React from 'react';
import ReactDOM from 'react-dom';

// Import statement that indicates the need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class myfavfilmzApplication extends React.Component {
  render() {
    return (
      <div className="my-fav-filmz">
        <div>Good morning</div>
      </div>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(myfavfilmzApplication), container);

