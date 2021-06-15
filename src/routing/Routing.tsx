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
import AddCompany from '../Pages/AddCompany';
import SimpleRoute from './SimpleRoute';
import AllCompanies from '../Pages/AllCompanies';
import AllUsers from '../Pages/AllUsers';
import AddCandidate from '../Pages/Candidate';
import { getRole } from '../utils/sessionStorage';
import { RECRUITER, EMPLOYER, CANDIDATE } from '../Content/Roles';
const Routing = () => {
  const role = getRole();

  const checkCandidate = () => {
    return role === CANDIDATE;
  };
  const checkEmployee = () => {
    return role === RECRUITER || role === EMPLOYER;
  };
  return (
    <Switch>
      <SimpleRoute exact path="/" component={Home} />
      <Route exact path="/registration" component={RegistrationForm} />
      <Route exact path="/login" component={Login} />
      {checkEmployee() && (
        <DashboardRoute
          exact
          path="/dashboard/employee/post-job"
          component={PostJob}
        />
      )}
      {checkEmployee() && (
        <DashboardRoute
          exact
          path="/dashboard/employee/all-users"
          component={AllUsers}
        />
      )}
      {checkEmployee() && (
        <DashboardRoute
          exact
          path="/dashboard/employee/all-companies"
          component={AllCompanies}
        />
      )}
      {checkEmployee() && (
        <DashboardRoute
          exact
          path="/dashboard/employee/add-company"
          component={AddCompany}
        />
      )}
      {checkCandidate() && (
        <DashboardRoute exact path="/jobs" component={AllJobs} />
      )}
      {checkCandidate() && (
        <DashboardRoute
          exact
          path="/dashboard/candidate/add-data"
          component={AddCandidate}
        />
      )}
      {checkCandidate() && (
        <DashboardRoute exact path="/job-apply" component={ApplyJob} />
      )}
      {checkCandidate() && (
        <DashboardRoute exact path="/jobs/:id" component={JobOverview} />
      )}{' '}
      {checkCandidate() && (
        <DashboardRoute
          exact
          path="/dashboard/candidate"
          component={Candidate}
        />
      )}
      <Redirect to="/" />
    </Switch>
  );
};

export default Routing;
