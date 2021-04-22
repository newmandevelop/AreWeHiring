import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import PrivateRoute from './PrivateRouting'
import Home from "../Containers/JobOverview";
import CustomLayout from "./../Containers/Layout/index";
const Routing = () => {
  return (
    <CustomLayout>
      <Switch>
        {/* <PrivateRoute exact path="/" component={Home} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/jobs/:id" component={Home} />

        <Redirect to="/" />
      </Switch>
    </CustomLayout>
  );
};

export default Routing;
