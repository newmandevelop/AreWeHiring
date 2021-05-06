import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import PrivateRoute from './PrivateRouting'
import JobOverview from '../Pages/JobOverview';
import AllJobs from '../Pages/AllJobs';
import Candidate from '../Pages/Candidate';
import RegistrationForm from '../Pages/SignUp';
import Login from '../Pages/Login';
const Routing = () => {
  return (
    <Switch>
      {/* <PrivateRoute exact path="/" component={Home} /> */}
      <Route exact path="/" component={AllJobs} />
      <Route exact path="/jobs" component={AllJobs} />

      <Route exact path="/jobs/:id" component={JobOverview} />
      <Route exact path="/dashboard/candidate" component={Candidate} />
      <Route exact path="/registration" component={RegistrationForm} />
      <Route exact path="/login" component={Login} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routing;
