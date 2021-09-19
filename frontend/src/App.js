// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from './components/HomePage/index';
import HomeFooter from "./components/HomeFooter";
import BusinessPage from "./components/BusinessPage";
// import PopularSearches from "./components/popular-searches";


//testing
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <HomePage />
            {/* <PopularSearches /> */}
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/business/:id'>
            <BusinessPage />
          </Route>
          {/* <Route path="/add-business">
            <AddBusiness />
          </Route> */}
          <Route>
            <p>Page Not Found</p>
          </Route>
        </Switch>

      )}
      <HomeFooter />
    </>
  );
}

export default App;
