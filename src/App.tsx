import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {

  return (
    <div className="App">
      <Button onClick={() => console.log('clicked')}>My Button</Button>
    </div>
  );
}

export default App;
