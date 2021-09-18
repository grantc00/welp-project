import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import logo from "../../image/welp-Logo.png";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <div>
          <NavLink id="loginButton" to="/login">
            Log In
          </NavLink>
          <NavLink id="singupButton" to="/signup">
            Sign Up
          </NavLink>
        </div>
      </>
    );
  }

  return (
    <div className="splash-top-img">
      <div>
        <NavLink className="homeButton" exact to="/">
          <img className="logo" src={logo} alt="Welp" />
        </NavLink>
      </div>
      <div className="nav-bar">{isLoaded && sessionLinks}</div>
    </div>
  );
}

export default Navigation;
