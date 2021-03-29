import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';

// Import statement that indicates the need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class myfavfilmzApplication extends React.Component {
  
  /*constructor() {
    super();
      // code executed right when the component is created in the memory
  }
  
  render() {
    return <div>Hello World</div>;
}

  componenetDidMount() {
    // code executed right after the component is added to the DOM
  }

  componentWillUnmount() {
    // code executed just before the moment the component gets removed from the DOM
  }
  */
}
// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(myfavfilmzApplication), container);

