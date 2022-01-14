import React from "react";
import { useSelector } from "react-redux";
import "./table.scss";
import { TableRow } from ".";

export default function Table() {
  const data = useSelector((state) => state.data);

  return (
    <div>
      <ul class="responsive-table">
        <li class="table-header">
          <div class="col-1">
            <input type="checkbox" name="select-all" id="select" />
          </div>
          <div class="col-2">Name</div>
          <div class="col-3">Category</div>
          <div class="col-4">Availability</div>
          <div class="col-5">Arrival</div>
        </li>
        {data.length === 0 ? (
          <div>Tidak ada data</div>
        ) : (
          data.map((data) => {
            return (
              <>
                <li class="table-row">
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
