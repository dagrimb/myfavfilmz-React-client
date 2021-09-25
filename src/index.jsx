import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';
//import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';

import moviesApp from './reducers/reducers';



import { devToolsEnhancer } from 'redux-devtools-extension';

// Import statement that indicates the need to bundle `./index.scss`
import './index.scss';

//const store = createStore(moviesApp, devToolsEnhancer());
const store = configureStore();

// Main component (will eventually use all the others)
class myfavfilmzApplication extends React.Component {
  


  render() {
    return (
      <Provider store={store}>
        <Container fluid style={{paddingLeft: 0, paddingRight: 0 }}>
          <MainView />
        </Container>
      </Provider>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(myfavfilmzApplication), container);

