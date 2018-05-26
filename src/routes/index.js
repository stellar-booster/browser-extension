import React from 'react';
import {Route, Switch} from 'react-router';
import Login from '../components/login';
import Transfer from '../components/transfer';
import PrivateRoute from '../components/private-route';

const Routes = () => (
  <Switch>
    <Route exact path="/(index.html|)" component={Login}/>
    <PrivateRoute path="/transfer" component={Transfer} />
  </Switch>
);

export default Routes;
