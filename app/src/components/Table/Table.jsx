import React from "react";
import { useSelector } from "react-redux";
import "./table.scss";
import { TableRow } from ".";

export default function Table() {
  const data = useSelector((state) => state.data);

  return (
    <div>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col-1">
            <input type="checkbox" name="select-all" id="select" />
          </div>
          <div className="col-2">Name</div>
          <div className="col-3">Category</div>
          <div className="col-4">Availability</div>
          <div className="col-5">Arrival</div>
        </li>
        {data.length === 0 ? (
          <div>Tidak ada data</div>
        ) : (
          data.map((data) => {
            return (
              <>
                <li className="table-row">
                  <TableRow key={data._id} data={data} />
                </li>
              </>
            );
          })
        )}
      </ul>
    </div>
  );
}
