import { useState } from "react";

interface Props {
  fruits: string[];
  heading: string;
}

const ListGroup = ({ fruits, heading }: Props) => {


  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return fruits.length === 0 ? <p>No items</p> : null;
  };


  return (
    <>
      <h1>List Group {heading}</h1>
      {/* if ERROR display message 1way */}
      {getMessage()}
      {/* if ERROR display message 2way*/}
      {fruits.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {fruits.map((fruit, index) => {
          return (
            <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={fruit} onClick={() => { setSelectedIndex(index) }}>
              {fruit}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListGroup;
