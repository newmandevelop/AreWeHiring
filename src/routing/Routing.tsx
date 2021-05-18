import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../Pages/Home';
import RegistrationForm from '../Pages/SignUp';
import Login from '../Pages/Login';
import JobOverview from '../Pages/JobOverview';
import AllJobs from '../Pages/AllJobs';
import Candidate from '../Pages/Candidate';
import PostJob from '../Pages/PostJob';
import DashboardRoute from './DashboardRoute';
import ApplyJob from '../Pages/ApplyJob';
import SimpleRoute from './SimpleRoute';
const Routing = () => {
  return (
    <Switch>
      <SimpleRoute exact path="/" component={Home} />
      <Route exact path="/registration" component={RegistrationForm} />
      <Route exact path="/login" component={Login} />
      <DashboardRoute exact path="/jobs" component={AllJobs} />
      <DashboardRoute exact path="/job-apply" component={ApplyJob} />
      <DashboardRoute exact path="/jobs/:id" component={JobOverview} />
      <DashboardRoute exact path="/dashboard/candidate" component={Candidate} />
      <DashboardRoute
        exact
        path="/dashboard/employee/post-job"
        component={PostJob}
      />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routing;
