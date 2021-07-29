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
import AddCompany from '../Pages/Employer/AddCompany';
import SimpleRoute from './SimpleRoute';
import AllCompanies from '../Pages/AllCompanies';
import AllUsers from '../Pages/AllUsers';
import AddCandidate from '../Pages/Candidate';
import Employer from '../Pages/Employer/Dashboard';
import ManageJobs from '../Pages/Employer/ManageJobs';
import EditJob from '../Pages/Employer/ManageJobs/EditJob'
import ManageApplications from '../Pages/Employer/ManageApplications';
import JobApplications from '../Pages/JobApplications'
import MyApplications from '../Pages/Candidate/MyApplications'
import ApplicationsForJob from '../Pages/Employer/ManageJobs/ApplicationsForJob'
import AddStaff from '../Pages/Employer/AddStaff';
import ManageStaff from '../Pages/Employer/ManageStaff';
import CandidateDetailsForm from '../Pages/Candidate/DetailsForm'
import UserProfile from '../Pages/UserProfile'
const Routing = () => {
  return (
    <Switch>
      <SimpleRoute exact path="/" component={Home} />
      <Route exact path="/registration" component={RegistrationForm} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/forgotPassword" component={ForgotPassword} />
      <Route exact path="/employee/add-organization" component={AddCompany} />
      <Route exact path="/candidate/fill-details" component={CandidateDetailsForm} />
      <DashboardRoute
        // exact
        path="/dashboard/reset-password"
        component={ResetPassword}
      />
      <DashboardRoute
        exact
        path="/dashboard/profile"
        component={UserProfile}
      />
      <DashboardRoute
        exact
        path="/dashboard/employee/post-job"
        component={PostJob}
      />
      <DashboardRoute
        exact
        path="/dashboard/employee/edit-job"
        component={EditJob}
      />
      <DashboardRoute
        exact
        path="/dashboard/employee/all-users"
        component={AllUsers}
      />
      <DashboardRoute
        exact
        path="/dashboard/employee/manage-organizations"
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
        path="/dashboard/employee/add-staff"
        component={AddStaff}
      />
      <DashboardRoute
        exact
        path="/dashboard/employee/manage-staff"
        component={ManageStaff}
      />
      <DashboardRoute
        exact
        path="/dashboard/candidate/my-applications"
        component={MyApplications}
      />
      <DashboardRoute
        exact
        path="/dashboard/employee/search-candidate"
        component={SearchCandidate}
      />

      <DashboardRoute
        exact
        path="/dashboard/employee/add-organization"
        component={AddCompany}
      />
      {/* <DashboardRoute
        exact
        path="/dashboard/employee/fill-details"
        component={AddCompany}
      /> */}
      <DashboardRoute
        exact
        path="/dashboard/candidate/fill-details"
        component={CandidateDetailsForm}
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
