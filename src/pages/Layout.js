import React from "react";
import style from "./Layout.module.css";
import login from "../assets/images/login.svg";

export default function Layout(props) {
  return (
    <div className={style.pageview}>
      <div className={style.leftSideBar}>
        <img src={login} alt="" className={style.sideImage} />
      </div>
      <div className={style.main}>{props.children}</div>
    </div>
  );
}
