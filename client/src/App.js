import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import stories from './components/layout/stories/stories'
import theme from './theme/theme'
import Navbar from "./components/layout/Navbar/Navbar";
import Landing from "./components/layout/Landing/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import categories from './components/layout/Categories/Categories'
import "./App.css";
import{ Reset } from './theme/reset'
import GlobalFonts from './theme/theme';
import { ThemeProvider} from 'styled-components'
import vendor from "./components/layout/vendor/vendor";
import Contact2 from './components/layout/Contactus/Contact2';
import ContactUS from './components/layout/Contactus/Contact';
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
       
        <GlobalFonts />
          <Reset/>
          <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/stories" component={stories} />
            <Route exact path="/categories" component={categories} />
            <Route exact path="/vendor" component={vendor} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Route exact path="/Contactus" component={ContactUS} /> 
            <Route exact path="/Contactus/new" component={Contact2} /> 
          </div>
        </Router>
        </ThemeProvider>
       
      </Provider>
    );
  }
}
export default App;
