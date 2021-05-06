import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { isUserLoggedIn } from '../utils/sessionStorage';
import JobOverview from '../Pages/JobOverview';
import AllJobs from '../Pages/AllJobs';
import Candidate from '../Pages/Candidate';
import PostJob from '../Pages/PostJob';
import CustomLayout from '../Containers/Layout';
const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <CustomLayout>
      <Switch>
        <Route exact path="/" component={AllJobs} />
        <Route exact path="/jobs" component={AllJobs} />

        <Route exact path="/jobs/:id" component={JobOverview} />
        <Route exact path="/dashboard/candidate" component={Candidate} />
        <Route exact path="/dashboard/employee/post-job" component={PostJob} />
      </Switch>
    </CustomLayout>
  );
};
export default PrivateRoute;
