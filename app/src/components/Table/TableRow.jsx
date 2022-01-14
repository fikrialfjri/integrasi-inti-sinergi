import React from "react";

export default function TableRow({ data }) {
  return (
    <>
      <div className="col-1" data-label="select">
        <input type="checkbox" name="select-all" id="select" />
      </div>
      <div className="col-2" data-label="Name">
        {data.name}
      </div>
      <div className="col-3" data-label="Category">
        {data.category}
      </div>
      <div className="col-4" data-label="Availability">
        {data.availability}
      </div>
      <div className="col-5" data-label="Arrival">
        {data.arrival_status}
      </div>
    </>
  );
}
