import "./App.scss";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App">
      <div className="card-row">
        <div className="card-col-30">
          <Form />
        </div>
        <div className="card-col-40">2</div>
        <div className="card-col-30">3</div>
      </div>
    </div>
  );
}

export default App;
