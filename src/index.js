import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import appReducer from './reducers/appReducer';
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';


const store = createStore(appReducer);
// window.store = store;

const history = createHistory()

ReactDOM.render(
  <MuiThemeProvider>
	  <Provider store={ store }>
      <ConnectedRouter history={history}>
        <Route path="/" component={ App } />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
	document.getElementById('root')
);
registerServiceWorker();
