import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "styled-components";

import store from "./redux/store/index";
import theme from "./config/theme";
import { i18n } from "./services/i18n";

import PrivateRoute from './components/PrivateRoute/index';
import Login from "./pages/Login";
import Home from "./pages/Home";

const browserHistory = createBrowserHistory();

function App() {

  const isLoged = () =>
  localStorage.getItem('token') ? true : false;
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter history={browserHistory}>
          <React.Fragment>
            <Switch>
              <Route
                exact
                path={`/${i18n("NAVIGATION").LOGIN}`}
                component={Login}
              />
              <PrivateRoute component={Home} 
              condition={isLoged}
              exact path={'/'} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
