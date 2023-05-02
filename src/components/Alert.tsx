import { ReactNode } from "react";

interface Props {
  text: string;
  children: ReactNode;
}

const Alert = ({ text, children }: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      ALERT: {text}
      <p>Children: {children}</p>
    </div>
  );
};

export default Alert;
