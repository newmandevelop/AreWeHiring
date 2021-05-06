import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRouting';

import RegistrationForm from '../Pages/SignUp';
import Login from '../Pages/Login';
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/registration" component={RegistrationForm} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routing;
