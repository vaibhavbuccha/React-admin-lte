import React from "react";
import Footer from "./Footer";
export default function Body(props) {
  return (
    <div>
      <div class="content-wrapper">{props.children}</div>
      <Footer />
    </div>
  );
}
