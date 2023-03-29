import React from "react";

const Message = ({ message }: any) => {
  const name = "Robertss";

  const getName = () => {
    return name;
  };

  return (
    <div>
      <div>{getName()}</div>
      {message}
    </div>
  );
};

export default Message;
