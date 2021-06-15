import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ModuleLayout from "./ModuleLayout";
import axios from "axios";

export default function UpdateDepartment(props) {
  const { id } = useParams();
  const [name, setName] = useState("");
  const nameRef = useRef(name);

  useEffect(async () => {
    await axios
      .get(`department/${id}`)
      .then((response) => {
        // nameRef(response.data.data.name);
        setName(response.data.data.name);
      })
      .catch((err) => {
        alert("Something wents wrong");
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <ModuleLayout moduleName="Update Department">
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
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="Departmentname">Department Name</label>
                        <input
                          type="text"
                          value={name}
                          ref={nameRef}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-info">
                          Update
                        </button>
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
