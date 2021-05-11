import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRouting';
import RegistrationForm from '../Pages/SignUp';
import Login from '../Pages/Login';
import { isUserLoggedIn } from '../utils/sessionStorage';
const Routing = () => {
  if (!isUserLoggedIn())
    return (
      <Switch>
        <Route exact path="/registration" component={RegistrationForm} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    );
  else
    return (
      <Switch>
        <PrivateRoute />
        <Redirect to="/" />
      </Switch>
    );
};

export default Routing;
