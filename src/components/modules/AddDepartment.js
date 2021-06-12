import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React, { useRef, useState } from "react";
import ModuleLayout from "./ModuleLayout";
import axios from "axios";
export default function AddDepartment() {
  const nameRef = useRef();
  const [response, setResponse] = useState("");
  const [isError, setIsError] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    alert(nameRef.current.value);
    axios
      .post("department/create", {
        name: nameRef.current.value,
      })
      .then((res) => {
        console.log(res);
        setResponse(() => "Department created Successfully. ");
        setIsError(false);
      })
      .catch((err) => {
        setResponse(() => err.response.data.message);
        setIsError(true);
      });
  };
  return (
    <ModuleLayout moduleName="Add Department">
      <section className="content">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header" align="right">
                <a href="/department" className="btn btn-primary">
                  Back
                </a>
              </div>
              <div class="card-body">
                <MDBContainer>
                  <MDBRow>
                    <MDBCol size="6">
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
                      <form onSubmit={submitHandler}>
                        <div className="form-group">
                          <label htmlFor="Name">Department Name</label>
                          <input
                            ref={nameRef}
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <button className="btn btn-info">Save</button>
                        </div>
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ModuleLayout>
  );
}
