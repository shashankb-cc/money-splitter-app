import "./ResetDiv.css";

import ResetField from "../ResetField";
import Button from "../Button/Button";

export function ResetDiv() {
  return (
    <div className="resetDiv">
      <ResetField label1="Tip Amount" label2="person" price="0" />
      <ResetField label1="Total" label2="person" price="0" />
      <Button label="RESET" />
    </div>
  );
}
export default ResetDiv;
