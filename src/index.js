import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import configStore from './app/store/configStore';

import Registration from './app/containers/registration';

import './index.less';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/registration" component={Registration}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
