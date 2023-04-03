import ListGroup from "./components/ListGroup";

function App() {
  let fruits = ["Banana", "Orange", "Apple", "Mango"];

  return (
    <div className="App">
      <ListGroup fruits={fruits} heading="FRUITS" />
    </div>
  );
}

export default App;
