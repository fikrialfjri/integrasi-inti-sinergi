import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createData } from "../../store/actions";
import "./form.scss";

export default function Form() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      category,
      availability,
    };

    try {
      await dispatch(createData(payload));

      setName("");
      setCategory("");
      setAvailability("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-card">
      <form action="submit" onSubmit={handleSubmit}>
        <div className="input-name">
          <div className="label">
            <label htmlFor="name">Name</label>
          </div>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-category">
          <div className="label">
            <label htmlFor="category">Category</label>
          </div>
          <select
            className="select-dropdown"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled hidden>
              Select Category
            </option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
            <option value="Category 4">Category 4</option>
          </select>
        </div>
        <div className="input-availability">
          <div className="label">
            <label htmlFor="availability">Availability</label>
          </div>
          <div className="radio-container">
            <input
              type="radio"
              id="available"
              name="availability"
              value={availability}
              onChange={(e) => setAvailability("Available")}
            />
            <label htmlFor="available">Available</label>
            <input
              type="radio"
              id="full"
              name="availability"
              value={availability}
              onChange={(e) => setAvailability("Full")}
            />
            <label htmlFor="full">Full</label>
          </div>
        </div>
        <div className="input-arrival">
          <div className="label">
            <label htmlFor="arrival">Arrival</label>
          </div>
          <input
            className="input"
            type="text"
            value={"Value Hasn't Arrived"}
            disabled
          />
        </div>
        <button className="input-button" type="submit">
          Submit Form
        </button>
      </form>
    </div>
  );
}
