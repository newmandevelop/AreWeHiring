import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { isUserLoggedIn } from '../utils/sessionStorage';
import JobOverview from '../Pages/JobOverview';
import AllJobs from '../Pages/AllJobs';
import Candidate from '../Pages/Candidate';
import PostJob from '../Pages/PostJob';
import CustomLayout from '../Containers/Layout';
import AllCompanies from '../Pages/AllCompanies';
import AddCompany from '../Pages/AddCompany';
const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <CustomLayout>
      <Switch>
        <Route exact path="/" component={AllJobs} />
        <Route exact path="/jobs" component={AllJobs} />
        <Route exact path="/companies" component={AllCompanies} />

        <Route exact path="/jobs/:id" component={JobOverview} />
        <Route exact path="/dashboard/candidate" component={Candidate} />
        <Route exact path="/dashboard/employee/post-job" component={PostJob} />
        <Route exact path="/dashboard/company/add-company" component={AddCompany} />
      </Switch>
    </CustomLayout>
  );
};
export default PrivateRoute;
