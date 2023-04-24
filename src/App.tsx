import ListGroup from "./components/ListGroup";

function App() {
  let fruits = ["Banana", "Orange", "Apple", "Mango"];

  const handleSelectItem = (item: string) => {
    console.log("You clicked: " + item);

  }

  return (
    <div className="App">
      <ListGroup fruits={fruits} heading="FRUITS" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
