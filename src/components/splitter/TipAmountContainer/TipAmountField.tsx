import styles from "./TipAmountField.module.css";

interface ResetFieldProps {
  /**
   * This is to pass the label
   */
  label1: string;
  label2: string;
  price: string;
}

export function TipAmountField(props: ResetFieldProps) {
  return (
    <div className={styles.labelPriceContainer}>
      <div className={styles.labelContainer}>
        <span>{props.label1}</span>
        <p>/{props.label2}</p>
      </div>

      <div className={styles.price}>$ {props.price}</div>
    </div>
  );
}

export default TipAmountField;
