import React, { ReactNode } from "react";

interface Props {
  text: string;
  children: ReactNode;
}

const Alert = ({ text, children }: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      Alert {text}
      <p>{children}</p>
    </div>
  );
};

export default Alert;
