import React from "react";
import { NavLink } from "react-router-dom";
import "./notFound.scss";

function NotFound() {
  return (
    <div className="notcontainer">
      <h1 className="notcontainer-content">404 Not Found</h1>
      <p className="notcontainer-page">
        The page you are looking for does not exist.
      </p>
      <p className="notcontainer-url">Please check the URL and try again.</p>
      <p className="notcontainer-link">
        <NavLink to="/">Return to Home Page</NavLink>
      </p>
    </div>
  );
}

export default NotFound;
