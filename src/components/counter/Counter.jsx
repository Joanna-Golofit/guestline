import React from "react";
import styles from "./Counter.module.css";

const Counter = ({ title, value, onClick }) => {
  return (
    <div className={styles.wrapper}>
      {title}: {""}
      <button className={styles.button} onClick={() => onClick(value - 1)}>
        {" "}
        -{" "}
      </button>
      {""} {value} {""}
      <button className={styles.button} onClick={() => onClick(value + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
