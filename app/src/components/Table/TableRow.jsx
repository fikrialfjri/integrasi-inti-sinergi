import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateData, deleteData } from "../../store/actions";
import closeBtn from "../../assets/Close.svg";

export default function TableRow({ data }) {
  const [isChecked, setIsChecked] = useState(false);
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const handleClick = (id) => {
    setIsChecked(!isChecked);
    setId(id);
  };

  const handleUpdate = async () => {
    try {
      await dispatch(updateData(id));

      setIsChecked(false);
      setId("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteData(id));

      setIsChecked(false);
      setId("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="col-1" data-label="select">
        <input
          type="checkbox"
          name="select-all"
          id="select"
          checked={isChecked}
          onChange={(e) => handleClick(data._id)}
        />
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
      {isChecked === true ? (
        <div className="container-modal">
          <div className="main-modal">
            <div className="close-button" onClick={(e) => setIsChecked(false)}>
              <img src={closeBtn} alt="X" />
            </div>
            <div className="modal-selected">1 Table Selected</div>
            <button
              className="modal-button-update"
              onClick={(e) => handleUpdate()}
            >
              Mark as Arrived
            </button>
            <button
              className="modal-button-delete"
              onClick={(e) => handleDelete()}
            >
              Delete Table
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
