import React from "react";
import { Redirect } from "react-router";
import Login from "../pages/Login";

export default function Header() {
  const logout = () => {
    if (window.confirm("Are you sure to want to logout")) {
      localStorage.removeItem("token");
      window.location.href = "/";
      return <Login />;
    }
  };

  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* <!-- Left navbar links --> */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="index3.html" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        {/* <!-- Right navbar links --> */}
        <ul className="navbar-nav ml-auto">
          {/* <!-- Navbar Search --> */}

          {/* <!-- Messages Dropdown Menu --> */}
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              data-toggle="dropdown"
              onClick={logout}
              // href="#"
            >
              <i className="fa fa-power-off "></i>
              {/* <span className="badge badge-danger navbar-badge">3</span> */}
            </a>
          </li>
          {/* <!-- Notifications Dropdown Menu --> */}

          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
