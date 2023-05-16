import { ReactNode } from "react";

import styles from './Button.module.css'

interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <>
      <div className={`btn btn-${color}`} onClick={onClick}>Dupa</div>
      <button className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>Nice!</button>
      {children}
    </>

  );
};

export default Button;
