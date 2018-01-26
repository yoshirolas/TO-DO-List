import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';


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
