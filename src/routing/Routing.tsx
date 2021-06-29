import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Pages/Home';
import RegistrationForm from '../Pages/SignUp';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import JobOverview from '../Pages/JobOverview';
import AllJobs from '../Pages/AllJobs';
import Candidate from '../Pages/Candidate';
import PostJob from '../Pages/PostJob';
import DashboardRoute from './DashboardRoute';
import ApplyJob from '../Pages/ApplyJob';
import AddCompany from '../Pages/AddCompany';
import SimpleRoute from './SimpleRoute';
import AllCompanies from '../Pages/AllCompanies';
import AllUsers from '../Pages/AllUsers';
import AddCandidate from '../Pages/Candidate';
import Employer from '../Pages/Employer/Dashboard';
import ManageJobs from '../Pages/Employer/ManageJobs';
const Routing = () => {
  return (
    <Switch>
      <SimpleRoute exact path="/" component={Home} />
      <Route exact path="/registration" component={RegistrationForm} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/forgotPassword" component={ForgotPassword} />
      <DashboardRoute
        exact
        path="/dashboard/employee/post-job"
        component={PostJob}
      />
      <DashboardRoute
        exact
        path="/dashboard/employee/all-users"
        component={AllUsers}
      />
      <DashboardRoute
        exact
        path="/dashboard/employee/all-companies"
        component={AllCompanies}
      />
      <DashboardRoute
        exact
        path="/dashboard/employee/manage-jobs"
        component={ManageJobs}
      />
      <DashboardRoute
        exact
        path="/dashboard/employee/add-company"
        component={AddCompany}
      />
      <DashboardRoute exact path="/jobs" component={AllJobs} />
      <DashboardRoute
        exact
        path="/dashboard/candidate/add-data"
        component={AddCandidate}
      />
      <DashboardRoute exact path="/job-apply" component={ApplyJob} />
      <DashboardRoute exact path="/jobs/:id" component={JobOverview} />
      <DashboardRoute exact path="/dashboard/candidate" component={Candidate} />
      <DashboardRoute exact path="/dashboard/employer" component={Employer} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routing;
