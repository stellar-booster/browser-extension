import React from 'react';
import {Route, Switch} from 'react-router';
import Login from '../components/login';
import Dashboard from '../components/dashboard';
import Transfer from '../components/transfer';
import PrivateRoute from '../components/private-route';

export const LOGIN = '/';
export const DASHBOARD = '/dashboard';
export const TRANSFER = '/transfer';

const Routes = () => (
  <Switch>
    <Route exact path="/(index.html|)" component={Login}/>
    <PrivateRoute path={DASHBOARD} component={Dashboard} />
    <PrivateRoute path={TRANSFER} component={Transfer} />
  </Switch>
);

export default Routes;
