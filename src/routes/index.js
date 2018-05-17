import React from 'react';
import {Route} from 'react-router';
import Login from '../components/login';
import Transfer from '../components/transfer';

const Routes = () => (
  <div>
    <Route exact path="/" component={Login}/>
    <Route path="/transfer" component={Transfer} />
  </div>
);

export default Routes;
