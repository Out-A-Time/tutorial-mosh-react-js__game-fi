import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [showAlert, setShowAlert] = useState(false)

  function handleClick() {
    setShowAlert(true);
  }
  function onClose() {
    setShowAlert(false);
  }

  return (
    <div className="App">
      {showAlert && <Alert onClose={onClose} />}
      <button type="button" className="btn btn-danger" onClick={handleClick}>Give Alert 1</button>

    </div>
  );
}

export default App;
