import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { i18n } from '../../services/i18n/index'

const PrivateRoute = ({ component: Component, condition, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      condition ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: `/${i18n('NAVIGATION').LOGIN}`, // Redirect to the correspondent url
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

export default PrivateRoute
