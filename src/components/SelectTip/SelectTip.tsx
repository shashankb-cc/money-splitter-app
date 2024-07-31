import "./SelectTip.css";

interface SelectTipProps {
  /**
   * This is the label
   */
  label: string;
  /**
   * Value fileds
   */
  value1: number;
  value2: number;
  value3: number;
  value4: number;
  value5: number;

  /**
   * This is to enter custom value
   */
  // custom: number;
}

export function SelectTip(props: SelectTipProps) {
  return (
    <div className="tip-selector">
      <label className="tip-label">{props.label}</label>
      <div className="tip-buttons">
        <button className="tip-button">{props.value1}%</button>
        <button className="tip-button">{props.value2}%</button>
        <button className="tip-button">{props.value3}%</button>
        <button className="tip-button">{props.value4}%</button>
        <button className="tip-button">{props.value5}%</button>
        <button className="tip-button">Custom</button>
      </div>
    </div>
  );
}

export default SelectTip;
