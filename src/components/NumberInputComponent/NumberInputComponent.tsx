import { ChangeEvent, useEffect, useId, useState } from "react";
import styles from "./NumberInput.module.css";
export interface NumberInputProps extends React.ComponentProps<"input"> {
  /**
   * Label of the Input
   */
  label: string;
  /**
   * Type of the icon
   */
  iconType: "person" | "dollar";
  /**
   * Error message that will be displayed on wrong input
   */
  errorMessage?: string;
  /**
   * Condition that returns true if the value is invalid otherwise false
   */
  isValidInput?: (value: number) => boolean;
  /**
   * Minimum allowed value
   */
  minValue?: number;
}
const iconPaths = {
  dollar: "/home/shashankb/react-sessions/my-react-app/src/assets/dollar.svg",
  person: "/home/shashankb/react-sessions/my-react-app/src/assets/person.svg",
};
export const NumberInput = ({
  label,
  iconType,
  errorMessage,
  isValidInput,
  minValue = 0,
  ...delegated
}: NumberInputProps) => {
  const [value, setValue] = useState(0);
  const [inputClass, setInputClass] = useState(`${styles.numberInput}`);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");
  const uniqueId = useId();
  const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
    setTouched(true);
  };
  useEffect(() => {
    if (touched) {
      if (isValidInput && isValidInput(value)) {
        setInputClass(`${styles.numberInput} ${styles.error}`);
        setError(errorMessage ?? "");
      } else if (value < minValue) {
        setInputClass(`${styles.numberInput} ${styles.error}`);
        setError(`${label} must be at least ${minValue}`);
      } else {
        setInputClass(styles.numberInput);
        setError("");
      }
    }
  }, [value, errorMessage, touched, minValue, label, isValidInput]);
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={`${uniqueId}number-input`}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input
          type="number"
          id={`${uniqueId}number-input`}
          className={inputClass}
          placeholder="0"
          onChange={inputHandle}
          min={`${minValue}`}
          {...delegated}
        />
        <div className={styles.iconContainer}>
          <img
            src={`${iconType}.svg`}
            width={iconType === "dollar" ? 20 : 18}
            alt={`${iconType}-icon`}
          />
        </div>
      </div>
      <p className={styles.errorMessage}>{error}</p>
    </div>
  );
};
