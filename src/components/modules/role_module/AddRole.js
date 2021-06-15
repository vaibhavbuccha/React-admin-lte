import React, { useRef, useState } from "react";
import ModuleLayout from "../ModuleLayout";
import axios from "axios";

export default function AddRole() {
  const nameRef = useRef();

  const [response, setResponse] = useState("");
  const [isError, setIsError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("role/create", {
        name: nameRef.current.value,
      })
      .then((res) => {
        console.log(res);
        setResponse(() => "Role created Successfully. ");
        setIsError(false);
        setTimeout(() => {
          window.location.href = "/role";
        }, 1000);
      })
      .catch((err) => {
        setResponse(() => err.response.data.message);
        setIsError(true);
      });
  };

  return (
    <ModuleLayout moduleName="Add New Role">
      <section className="content">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header" align="right">
                <a href="/role" className="btn btn-primary">
                  Back
                </a>
              </div>
              <div class="card-body">
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-sm-6">
                      <div
                        align="center"
                        style={{
                          color: !isError ? "green" : "red",
                          border: !isError
                            ? "1px solid green"
                            : "1px solid red",
                          padding: "10px",
                          borderRadius: "10px",
                          display: response != "" ? "block" : "none",
                        }}
                      >
                        {response}
                      </div>
                      <div className="form-group">
                        <label htmlFor="roleName">Role Name</label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="Role Name"
                          ref={nameRef}
                        />
                      </div>
                      <div className="form-group">
                        <button className="btn btn-info">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ModuleLayout>
  );
}
