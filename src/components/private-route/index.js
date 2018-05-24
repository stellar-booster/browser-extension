import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route} from 'react-router';
import {Redirect} from 'react-router-dom';

const PrivateRoute = (props) => {
  const {
    isAuthenticated,
    component: Component,
  } = props;

  return (
    <Route
      {...this.props}
      render={p =>
        (isAuthenticated
          ? <Component {...p} />
          : (
            <Redirect to={{
              pathname: '/',
              state: {from: p.location},
            }}
            />
          ))
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default connect(({user}) => ({
  isAuthenticated: user.loggedIn,
}))(PrivateRoute);
