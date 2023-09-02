import React from "react";
import styles from "./SubmitButton.module.css";

type Props = {
  children: string;
};

const SubmitButton = ({ children, ...props }: Props) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default SubmitButton;
