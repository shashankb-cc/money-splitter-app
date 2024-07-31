import styles from "./NumberInput.module.css";
import DollarIcon from "/dollar.svg";
import PersonIcon from "/person.svg";

interface NumberInputProps {
  value: number;
  label: string;
  typeofIcon?: "person" | "dollar";
  onChange: (value: number) => void;
  error: boolean | undefined | string;
}

export function NumberInput(props: NumberInputProps) {
  const icon = props.typeofIcon === "person" ? PersonIcon : DollarIcon;

  return (
    <div className={styles.mainContainer}>
      <label htmlFor="numberInput" className={styles.numberInputLabel}>
        {props.label}
      </label>
      <div
        className={`${styles.inputContainer} ${props.error ? `${styles.inputError}` : ""}`}
      >
        <img
          src={icon}
          alt={`${props.typeofIcon} Icon`}
          className={styles.icon}
        />
        <input
          type="number"
          className={styles.numberInput}
          value={props.value || ""}
          onChange={(event) => props.onChange(Number(event.target.value))}
          autoFocus
        />
      </div>
      <div className={styles.errorContainer}>
        {props.error && <p className={styles.errorField}>{props.error}</p>}
      </div>
    </div>
  );
}

export default NumberInput;
