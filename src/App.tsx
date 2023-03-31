import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Notification from "./components/Notification";

function App() {
  const [showNotification, setShowNotification] = useState(false);

  const kasztany = ["dupa1", "dupa2", "dupa3", "dupa4"];

  const handleSelectKasztany = (kasztany: string[]) => {
    console.log("Selected your favorite kasztan: ", kasztany);
  };

  const text = "DANGEROUS";

  return (
    <div className="App">
      {showNotification === true && (
        <Notification onClose={() => setShowNotification(false)} />
      )}

      <Alert text={text}>
        HELLO <span>WORLD</span>
      </Alert>
      <Button onClick={() => console.log("clicked")} color={"danger"}>
        My Button
      </Button>
      <Button onClick={() => setShowNotification(true)} color={"primary"}>
        Notify me
      </Button>
      <ListGroup
        kasztany={kasztany}
        heading={"A"}
        onSelectKasztany={handleSelectKasztany}
      />
      <ListGroup
        kasztany={kasztany}
        heading={"B"}
        onSelectKasztany={handleSelectKasztany}
      />
      {/* Can have two independed from eachother states - click to be blue */}
    </div>
  );
}

export default App;
