import React, { Children } from "react";

export default function ModuleLayout(props) {
  return (
    <>
      <section className="content-header">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">{props.moduleName}</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/dashboard">Home</a>
                  </li>
                  <li className="breadcrumb-item active">{props.moduleName}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {props.children}
      </section>
    </>
  );
}
