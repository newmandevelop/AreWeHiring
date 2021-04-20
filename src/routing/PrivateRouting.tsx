import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isUserLoggedIn } from '../utils/sessionStorage'

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isUserLoggedIn()) {
          return <Component {...props} />
        }

        return (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: props.location },
            }}
          />
        )
      }}
    />
  )
}
export default PrivateRoute
