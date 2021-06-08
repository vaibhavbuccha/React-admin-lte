import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Dashboard from "../components/Dashboard";
import Body from "../components/Body";
import { isAuthenticated } from "../util";
import Login from "../pages/Login";

export default function Main(props) {
  if (!isAuthenticated()) {
    window.location.href = "/";
    // return <Login />;
  }
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Body>{props.children}</Body>
    </div>
  );
}
