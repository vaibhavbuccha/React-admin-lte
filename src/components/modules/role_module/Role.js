import React, { useEffect, useState } from "react";
import ModuleLayout from "../ModuleLayout";
import MaterialTable from "material-table";
import axios from "axios";

export default function Role() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("role/getAll")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const columns = [
    {
      title: "ID",
      field: "_id",
    },
    {
      title: "Name",
      field: "name",
    },
  ];

  const clickHandler = (e, rowdata) => {
    window.location.href = `/role/${rowdata._id}`;
  };

  return (
    <ModuleLayout moduleName="Role Management">
      <section className="content">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header" align="right">
                <a href="/add/role" className="btn btn-primary">
                  Add Role
                </a>
              </div>
              <div class="card-body">
                <MaterialTable
                  title="Role data"
                  data={data}
                  columns={columns}
                  onRowClick={clickHandler}
                  options={{
                    filtering: true,
                    exportButton: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ModuleLayout>
  );
}
