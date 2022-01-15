import React, { useEffect } from "react";
import "./App.scss";
import { Form } from "./components/Form";
import { Category, Availability } from "./components/Chart";
import { Table } from "./components/Table";
import { fetchData } from "./store/actions";
import { useDispatch } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Charts and Table Visualization</h1>
      <div className="card-row">
        <div className="card-col-30">
          <Form />
        </div>
        <div className="card-col-40">
          <Category />
        </div>
        <div className="card-col-30">
          <Availability />
        </div>
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}

export default App;
