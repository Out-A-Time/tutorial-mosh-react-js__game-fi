import React from "react";

const ListGroup = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  //   const fruits: any = [];

  let fruitsMapped = fruits.map((fruit: any) => {
    return <li key={fruit}>{fruit}</li>;
  });

  //   const message = fruits.length === 0 ? <p>No items</p> : null;

  const getMessage = () => {
    return fruits.length === 0 ? <p>No items</p> : null;
  };

  return (
    <>
      <h1>List Group</h1>
      {getMessage()} {/* if ERROR display message */}
      <ul className="list-group">
        <li className="list-group-item">{fruitsMapped}</li>
      </ul>
    </>
  );
};

export default ListGroup;
