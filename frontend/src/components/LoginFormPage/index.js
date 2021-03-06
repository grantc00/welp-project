// frontend/src/components/LoginFormPage/index.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

   // demo user --------------
   const demo = () => {
    dispatch(
      sessionActions.login({
        credential: "demo@user.io",
        password: "password",
      })
    );
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <p className="login-form-header">Log in to Welp</p>
        <p className="login-form-header-2">
          New to Welp?
          <Link to="/signup" className="signup-text">
            Sign up
          </Link>
        </p>
        <ul style={{ color: "#bbbbbb", listStyle: "none" }}>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          <input
           className="info-textarea"
            type="text"
            value={credential}
            placeholder="Email or Username"
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          <input
           className="info-textarea"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="loginButton" type="submit">
          Log In
        </button>

        <button className="loginButton" onClick={demo}>
          Demo User
        </button>
      </form>
    </div>
  );
}

export default LoginFormPage;
