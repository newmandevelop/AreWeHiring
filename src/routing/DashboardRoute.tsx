import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import CustomLayout from './../Containers/Layout';
import { getRole } from '../utils/sessionStorage';
import routes from '../Content/routes.json';
import { CANDIDATE, EMPLOYER, RECRUITER } from '../Content/Roles';
const DashboardRoute = ({ component, path, isAuthenticated, ...rest }: any) => {
  const routeComponent = (props: any) => React.createElement(component, props);
  const role = getRole();

  const getRoute = () => {
    if (role === CANDIDATE) {
      if (routes.candidate.includes(path)) {
        return <Route {...rest} render={routeComponent} />;
      } else {
        return <Redirect to="/" />;
      }
    }
    if (role === EMPLOYER || role === RECRUITER) {
      if (routes.employee.includes(path)) {
        return <Route {...rest} render={routeComponent} />;
      } else {
        return <Redirect to="/" />;
      }
    }
  };

  return <CustomLayout sideBar={true}>{getRoute()}</CustomLayout>;
};

export default DashboardRoute;
