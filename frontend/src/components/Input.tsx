import React from "react";
import styles from "./Input.module.css";

type Props = {
  placeholder: string;
  type: string;
  name: string;
};

const Input = (props: Props) => {
  return <input className={styles.input} {...props} />;
};

export default Input;
