import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRouting';
import Home from '../Pages/Home';
import RegistrationForm from '../Pages/SignUp';
import Login from '../Pages/Login';
import CustomLayout from '../Containers/Layout';
const Routing = () => {
  return (
    <CustomLayout>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/registration" component={RegistrationForm} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute />

        <Redirect to="/" />
      </Switch>
    </CustomLayout>
  );
};

export default Routing;
