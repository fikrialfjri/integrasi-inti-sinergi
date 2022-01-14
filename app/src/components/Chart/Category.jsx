import React from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./category.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Category() {
  const data = useSelector((state) => state.data);

  let category1 = [];
  let category2 = [];
  let category3 = [];
  let category4 = [];

  data.forEach((val) => {
    switch (val.category) {
      case "Category 1":
        category1.push(val);
        break;
      case "Category 2":
        category2.push(val);
        break;
      case "Category 3":
        category3.push(val);
        break;
      case "Category 4":
        category4.push(val);
        break;
    }
  });

  category1 = category1.length;
  category2 = category2.length;
  category3 = category3.length;
  category4 = category4.length;

  return (
    <div className="category-container">
      <div className="category">
        <h4 className="category-title">Category Ratio</h4>
        <div className="category-info">
          <div className="category-row">
            <div className="category-col">
              <div className="category-name">Category 1</div>
              <div className="total-category">{category1}</div>
            </div>
            <div className="category-col">
              <div className="category-name">Category 2</div>
              <div className="total-category">{category2}</div>
            </div>
            <div className="category-col">
              <div className="category-name">Category 3</div>
              <div className="total-category">{category3}</div>
            </div>
            <div className="category-col">
              <div className="category-name">Category 4</div>
              <div className="total-category">{category4}</div>
            </div>
          </div>
        </div>
        <div>
          <Bar
            data={{
              labels: ["1", "2", "3", "4"],
              datasets: [
                {
                  label: "",
                  data: [category1, category2, category3, category4],
                  backgroundColor: "#EF6D3F",
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
      </div>
    </div>
  );
}
