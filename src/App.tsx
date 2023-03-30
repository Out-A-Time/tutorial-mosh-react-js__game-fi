import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const [count, setCount] = useState(0);
  const kasztan = ["dupa1", "dupa2", "dupa3", "dupa4"];

  return (
    <div className="App">
      <ListGroup kasztan={kasztan} heading={"A"} />
      <ListGroup kasztan={kasztan} heading={"B"} />
      {/* Can have two independed from eachother states - click to be blue */}
    </div>
  );
}

export default App;
