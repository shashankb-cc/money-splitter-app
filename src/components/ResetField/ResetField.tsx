import "./ResetField.css";

interface ResetFieldProps {
  /**
   * This is to pass the label
   */
  label1: string;
  label2: string;
  price: string;
}

export function ResetField(props: ResetFieldProps) {
  return (
    <div className="price-div">
      <div className="tip-amount">
        {props.label1} /
        <br />
        {props.label2}
      </div>

      <div className="price"> $ {props.price}</div>
    </div>
  );
}

export default ResetField;
