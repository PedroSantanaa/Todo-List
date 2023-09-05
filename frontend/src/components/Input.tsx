import React from "react";
import styles from "./Input.module.css";

type Props = {
  placeholder: string;
  type: string;
  name: string;
  value?: string | number;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const Input = (props: Props) => {
  return <input className={styles.input} {...props} />;
};

export default Input;
