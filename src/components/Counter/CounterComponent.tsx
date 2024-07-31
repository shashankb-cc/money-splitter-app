import styles from "./CounterComponent.module.css";
import { useState } from "react";
export interface CounterComponentProps {
  /**
   * The value displayed on the left side of the counter.
   */
  valueLeft?: number;

  /**
   * The value displayed on the right side of the counter.
   */
  valueRight?: number;

  /**
   * Indicates whether the left counter is in editing mode.
   */
  isEditingLeft?: boolean;

  /**
   * Indicates whether the right counter is in editing mode.
   */
  isEditingRight?: boolean;
}


export function CounterComponent({
  valueLeft: initialLeft = 0,
  valueRight: initialRight = 0,
  isEditingLeft: initialEditingLeft = false,
  isEditingRight: initialEditingRight = false,
  
}: CounterComponentProps) {
  const [valueLeft, setValueLeft] = useState(initialLeft);
  const [valueRight, setValueRight] = useState(initialRight);
  const [isEditingLeft, setIsEditingLeft] = useState(initialEditingLeft);
  const [isEditingRight, setIsEditingRight] = useState(initialEditingRight);
  let total = 0;

  if (isNaN(valueLeft) || isNaN(valueRight)) {
    total = 0;
  } else {
    total = valueLeft + valueRight;
  }

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.totalValueTitle}>
        Total: <span>{total}</span>
      </h1>
      <div className={styles.counterSet}>
        <button
          className={`${styles.btn} ${styles.green}`}
          onClick={() => {
            setValueLeft((prevValue) => {
              const newValue = prevValue + 1;
              return newValue;
            });
          }}
        >
          +
        </button>
        {isEditingLeft ? (
          <input
            type="number"
            className={styles.valueInput}
            value={valueLeft}
            onChange={(e) => {
              const newValue = e.target.valueAsNumber;
              setValueLeft(newValue);
             
            }}
            onBlur={() => setIsEditingLeft(false)}
            autoFocus
          />
        ) : (
          <span
            className={styles.value}
            onClick={() => setIsEditingLeft(true)}
          >{`Counter 1 : ${valueLeft}`}</span>
        )}
        <button
          className={`${styles.btn} ${styles.red}`}
          onClick={() => {
            setValueLeft((prevValue) => {
              const newValue = isNaN(prevValue) ? 0 : prevValue - 1;
             
              return newValue;
            });
          }}
        >
          -
        </button>
      </div>
      <div className={styles.counterSet}>
        <button
          className={`${styles.btn} ${styles.green}`}
          onClick={() => {
            setValueRight((prevValue) => {
              const newValue = prevValue + 1;
              
              return newValue;
            });
          }}
        >
          +
        </button>
        {isEditingRight ? (
          <input
            type="number"
            className={styles.valueInput}
            value={valueRight}
            onChange={(e) => {
              const newValue = e.target.valueAsNumber;
              setValueRight(newValue);
              
            }}
            onBlur={() => setIsEditingRight(false)}
            autoFocus
          />
        ) : (
          <span
            className={styles.value}
            onClick={() => setIsEditingRight(true)}
          >{`Counter 2 : ${valueRight}`}</span>
        )}
        <button
          className={`${styles.btn} ${styles.red}`}
          onClick={() => {
            setValueRight((prevValue) => {
              const newValue = isNaN(prevValue) ? 0 : prevValue - 1;
              return newValue;
            });
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
