import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import "./availability.scss";

export default function Availability() {
  const data = useSelector((state) => state.data);

  let available = [];
  let full = [];

  data.forEach((val) => {
    switch (val.availability) {
      case "Available":
        available.push(val);
        break;
      case "Full":
        full.push(val);
        break;
    }
  });

  available = available.length;
  full = full.length;

  return (
    <div className="availability">
      <h4 className="availability-title">Availability Ratio</h4>
      <div className="availability-chart">
        <Doughnut
          data={{
            labels: ["Available", "Full"],
            datasets: [
              {
                label: "",
                data: [available, full],
                backgroundColor: ["#295757", "#EF6D3F"],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
      <div className="availability-info">
        <div className="availability-available">
          <div className="availability-text">
            <div className="square-icon"></div>
            <div>
              <div className="availability-name">Available</div>
              <div className="total-availability">{available}</div>
            </div>
          </div>
        </div>
        <div className="availability-full">
          <div className="availability-text">
            <div className="square-icon" />
            <div>
              <div className="availability-name">Full</div>
              <div className="total-availability">{full}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
