import React, { MouseEvent, useState } from "react";

// Props are inputs to our component
interface Props {
  kasztany: string[];
  heading: string;
  onSelectKasztany: (kasztany: string[]) => void;
}

const ListGroup = ({ kasztany, heading, onSelectKasztany }: Props) => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  //   const fruits: any = [];

  // useState Hook - this component can have data or state that will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState("");

  let fruitsMapped = fruits.map((fruit: any, index: number) => {
    return (
      <li
        className="list-group-item"
        key={fruit}
        onClick={() => {
          console.log(`You clicked on ${fruit}`, index);
        }}
      >
        {fruit}
      </li>
    );
  });

  //   const message = fruits.length === 0 ? <p>No items</p> : null;

  const getMessage = () => {
    return fruits.length === 0 ? <p>No items</p> : null;
  };

  // Event handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List Group 1 {heading}</h1>
      {getMessage()} {/* if ERROR display message */}
      {fruits.length === 0 && <p>No items</p>}
      {/* if ERROR display message ->  true && 'Mosh' returns 'Mosh'*/}
      <ul className="list-group">{fruitsMapped}</ul>
      {/*  */}
      <h1>List Group 2</h1>
      {fruits.length === 0 && <p>No items</p>}
      {/* if ERROR display message ->  true && 'Mosh' returns 'Mosh'*/}
      <ul className="list-group">
        {fruits.map((fruit: any, index: number) => {
          return (
            <li
              className="list-group-item"
              key={fruit}
              onClick={() => {
                console.log(`You clicked on ${fruit}`, index);
              }}
            >
              {fruit}
            </li>
          );
        })}
      </ul>
      {/* This has been passed as props from APP parent */}
      <ul>
        {kasztany.map((kasztan: any, index: number) => {
          return (
            <li
              className="list-group-item"
              key={kasztan}
              onClick={() => {
                console.log(`You clicked on ${kasztan}`, index);
                onSelectKasztany(kasztan);
              }}
            >
              {kasztan}
            </li>
          );
        })}
      </ul>
      <h1>List Group 3</h1>
      {fruits.length === 0 && <p>No items</p>}{" "}
      {/* if ERROR display message ->  true && 'Mosh' returns 'Mosh'*/}
      <ul className="list-group">
        {fruits.map((fruit: any, index: number) => {
          return (
            <li className="list-group-item" key={fruit} onClick={handleClick}>
              {fruit}
            </li>
          );
        })}
      </ul>
      {/*  */}
      <h1>List Group 4</h1>
      {fruits.length === 0 && <p>No items</p>}
      {kasztany.length === 0 && <p>No kasztans</p>}
      {/* if ERROR display message ->  true && 'Mosh' returns 'Mosh'*/}
      <ul className="list-group">
        {fruits.map((fruit: string, index: number) => {
          return (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={fruit}
              onClick={() => setSelectedIndex(index)}
            >
              {fruit}
            </li>
          );
        })}
      </ul>
      <p>=================================</p>
    </>
  );
};

export default ListGroup;
