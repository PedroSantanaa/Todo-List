import React from "react";
import styles from "./LoginCard.module.css";

type Props = {
  title: string;
  children: React.ReactNode;
};

const LoginCard = ({ title, children }: Props) => {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default LoginCard;
