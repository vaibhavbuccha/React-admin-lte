import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Dashboard from "../components/Dashboard";
import Body from "../components/Body";

export default function Main(props) {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Body>{props.children}</Body>
    </div>
  );
}
