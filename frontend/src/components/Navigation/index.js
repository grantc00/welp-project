import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink id="loginButton" to="/login">Log In</NavLink>
        <NavLink id="singupButton" to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
      <div className="splash-top-img">
        <div className="nav-bar">
          {isLoaded && sessionLinks}
        </div>
        <div>
        <NavLink className="homeButton" exact to="/">Welp</NavLink>
        </div>
      </div>

  );
}

export default Navigation;
