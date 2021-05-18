import React from 'react';
import { Switch } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return <Switch></Switch>;
};
export default PrivateRoute;
