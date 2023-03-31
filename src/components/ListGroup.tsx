import { MouseEvent } from "react";
const ListGroup = () => {
  let fruits = ["Banana", "Orange", "Apple", "Mango"];
  // fruits = []

  const getMessage = () => {
    return fruits.length === 0 ? <p>No items</p> : null;
  };

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  }

  return (
    <>
      <h1>List Group</h1>
      {/* if ERROR display message 1way */}
      {getMessage()}
      {/* if ERROR display message 2way*/}
      {fruits.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {fruits.map((fruit, index) => {
          return (
            <li className="list-group-item" key={fruit} onClick={handleClick}>
              {fruit}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListGroup;
