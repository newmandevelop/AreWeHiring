import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Pages/Home';
import RegistrationForm from '../Pages/SignUp';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import ResetPassword from '../Pages/ResetPassword';
import JobOverview from '../Pages/JobOverview';
import AllJobs from '../Pages/AllJobs';
import Candidate from '../Pages/Candidate';
import PostJob from '../Pages/PostJob';
import SearchCandidate from '../Pages/SearchCandidate';
import DashboardRoute from './DashboardRoute';
import ApplyJob from '../Pages/ApplyJob';
import AddCompany from '../Pages/AddCompany';
import SimpleRoute from './SimpleRoute';
import AllCompanies from '../Pages/AllCompanies';
import AllUsers from '../Pages/AllUsers';
import AddCandidate from '../Pages/Candidate';
import Employer from '../Pages/Employer/Dashboard';
import ManageJobs from '../Pages/Employer/ManageJobs';
import ManageApplications from '../Pages/Employer/ManageApplications';
import JobApplications from '../Pages/JobApplications'
import ApplicationsForJob from '../Pages/Employer/ManageJobs/ApplicationsForJob'
const Routing = () => {
  return (
    <Switch>
      <SimpleRoute exact path="/" component={Home} />
      <Route exact path="/registration" component={RegistrationForm} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/forgotPassword" component={ForgotPassword} />
      <DashboardRoute
        // exact
        path="/dashboard/reset-password"
        component={ResetPassword}
      />
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
        path="/dashboard/employee/manage-jobs/applications"
        component={ApplicationsForJob}
      />
      <DashboardRoute
        exact
        path="/dashboard/employee/job-applications"
        component={JobApplications}
      />
      <DashboardRoute
        exact
        path="/dashboard/employee/manage-applications"
        component={ManageApplications}
      />
      <DashboardRoute
        exact
        path="/dashboard/employee/search-candidate"
        component={SearchCandidate}
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
