import styles from "./SelectTipContainer.module.css";

interface SelectTipProps {
  label: string;
  tipValues: number[];
  selectedTip: number | null;
  onSelect: (value: number | null) => void;
  onCustomTipChange: (value: number) => void;
}

export function SelectTip(props: SelectTipProps) {
  const handleButtonClick = (value: number) => {
    props.onSelect(value);
  };

  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      props.onSelect(value);
    }
  };

  return (
    <div className={styles.tipSelector}>
      <label className={styles.tipLabel}>{props.label}</label>
      <div className={styles.tipButtonsContainer}>
        {props.tipValues.map((value, index) => (
          <button
            key={index}
            className={`${styles.tipButton} ${props.selectedTip === value ? `${styles.selected}` : ""}`}
            onClick={() => handleButtonClick(value)}
          >
            {value}%
          </button>
        ))}
        <input
          type="number"
          className={`${styles.tipButton} ${styles.custom}`}
          placeholder="Custom"
          onChange={handleCustomTipChange}
        />  
      </div>
    </div>
  );
}

export default SelectTip;
