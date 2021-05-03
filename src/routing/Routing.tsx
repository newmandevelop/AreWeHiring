import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import PrivateRoute from './PrivateRouting'
import JobOverview from '../Containers/JobOverview';
import CustomLayout from './../Containers/Layout/index';
import AllJobs from './../Containers/AllJobs/index';
import Dashboard from './../Containers/Dashboard/index';
import RegistrationForm from '../Containers/SignUp';
import Login from '../Containers/Login';
const Routing = () => {
  return (
    <Switch>
      {/* <PrivateRoute exact path="/" component={Home} /> */}
      <Route exact path="/" component={AllJobs} />
      <Route exact path="/jobs" component={AllJobs} />

      <Route exact path="/jobs/:id" component={JobOverview} />
      {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      <Route exact path="/dashboard/candidate" component={Dashboard} />
      <Route exact path="/registration" component={RegistrationForm} />
      <Route exact path="/login" component={Login} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routing;
