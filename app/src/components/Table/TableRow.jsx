import React from "react";

export default function TableRow({ data }) {
  return (
    <>
      <div class="col-1" data-label="select">
        <input type="checkbox" name="select-all" id="select" />
      </div>
      <div class="col-2" data-label="Name">
        {data.name}
      </div>
      <div class="col-3" data-label="Category">
        {data.category}
      </div>
      <div class="col-4" data-label="Availability">
        {data.availability}
      </div>
      <div class="col-5" data-label="Arrival">
        {data.arrival_status}
      </div>
    </>
  );
}
