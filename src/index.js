import './style/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import App from './App';
import ViewBtcUsd from './components/ViewBtcUsd';
import ViewEthUsd from './components/ViewEthUsd';

const Root = () => {
  return (
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/viewbtcusd" component={ViewBtcUsd} />
          <Route path="/viewethusd" component={ViewEthUsd} />
        </Switch>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.querySelector('#root')
);
