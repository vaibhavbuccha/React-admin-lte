import React from "react";
import ModuleLayout from "./ModuleLayout";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBContainer } from "mdbreact";
export default function AddEmployee() {
  return (
    <ModuleLayout moduleName="Add Employee">
      <section className="content">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header" align="right">
                <a href="/employee" className="btn btn-primary">
                  Back
                </a>
              </div>
              <div class="card-body">
                <MDBContainer>
                  <MDBRow>
                    <MDBCol size="6">
                      <div className="form-group">
                        <label htmlFor="Name"> Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </MDBCol>
                    <MDBCol size="6">
                      <div className="form-group">
                        <label htmlFor="Email"> Email</label>
                        <input
                          type="email"
                          name="Email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol size="6">
                      <div className="form-group">
                        <label htmlFor="employeeId"> Employee Id</label>
                        <input
                          type="text"
                          name="empid"
                          className="form-control"
                          placeholder="Employee ID"
                        />
                      </div>
                    </MDBCol>
                    <MDBCol size="6">
                      <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <MDBContainer>
                          <MDBRow>
                            <MDBCol size="4">
                              <label htmlFor="male">Male</label>
                              &nbsp;&nbsp;&nbsp;
                              <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="0"
                              />
                            </MDBCol>
                            <MDBCol size="4">
                              <label htmlFor="female">Female</label>
                              &nbsp;&nbsp;&nbsp;
                              <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="1"
                              />
                            </MDBCol>
                            <MDBCol size="4">
                              <label htmlFor="other">Other</label>
                              &nbsp;&nbsp;&nbsp;
                              <input
                                type="radio"
                                id="other"
                                name="gender"
                                value="2"
                              />
                            </MDBCol>
                          </MDBRow>
                        </MDBContainer>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol size="4">
                      <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <select
                          name="department"
                          className="form-control"
                          id=""
                        >
                          <option value="">Select Department</option>
                        </select>
                      </div>
                    </MDBCol>
                    <MDBCol size="4">
                      <div className="form-group">
                        <label htmlFor="Role">Role</label>
                        <select name="role" className="form-control" id="">
                          <option value="">Select Role</option>
                        </select>
                      </div>
                    </MDBCol>
                    <MDBCol size="4">
                      <div className="form-group">
                        <label htmlFor="salary">Salary</label>
                        <input
                          type="number"
                          name="salary"
                          className="form-control"
                          placeholder="Salary"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol size="4">
                      <div className="form-group">
                        <label htmlFor="dob">D.O.B.</label>
                        <input
                          type="date"
                          className="form-control"
                          name="dob"
                          placeholder="D.O.B."
                        />
                      </div>
                    </MDBCol>
                    <MDBCol size="4">
                      <div className="form-group">
                        <label htmlFor="joiningDate">Joining Date</label>
                        <input
                          type="date"
                          className="form-control"
                          name="joining"
                          placeholder="Joining Date"
                        />
                      </div>
                    </MDBCol>
                    <MDBCol size="4">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone number"
                          className="form-control"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol size="12">
                      <div className="form-group">
                        <label htmlFor="Address">Address</label>
                        <textarea
                          name="address"
                          placeholder="Postal Address..."
                          className="form-control"
                          id=""
                          rows="4"
                        ></textarea>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBRow size="12">
                      <div className="form-group">
                        <button className="btn btn-primary">Submit</button>
                      </div>
                    </MDBRow>
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
