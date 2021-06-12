import React, { useEffect, useState } from "react";
import ModuleLayout from "./ModuleLayout";
import MaterialTable from "material-table";
import axios from "axios";

export default function Department() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("department/getAll")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // const data = [
  //   {
  //     id: 1,
  //     name: "sales",
  //   },
  //   {
  //     id: 2,
  //     name: "marketing",
  //   },
  //   {
  //     id: 3,
  //     name: "seo",
  //   },
  //   {
  //     id: 4,
  //     name: "smo",
  //   },
  //   {
  //     id: 5,
  //     name: "bpo",
  //   },
  // ];

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
    alert("working");
    console.log(e);
    console.log("rowdata", rowdata);
  };

  return (
    <ModuleLayout moduleName="Department Management">
      <section className="content">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header" align="right">
                <a href="/add/department" className="btn btn-primary">
                  Add Department
                </a>
              </div>
              <div class="card-body">
                <MaterialTable
                  title="Department data"
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
