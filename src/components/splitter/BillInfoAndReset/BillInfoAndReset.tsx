import "./BillInfoAndReset.css";

import TipAmountField from "../TipAmountContainer/TipAmountField"; 

interface ResetDivProps {
  tipAmount: string;
  totalAmount: string;
  onReset: () => void;
}

export function BillInfoAndReset({
  tipAmount,
  totalAmount,
  onReset,
}: ResetDivProps) {
  return (
    <div className="resetDiv">
      <TipAmountField label1="Tip Amount" label2="person" price={tipAmount} />
      <TipAmountField label1="Total" label2="person" price={totalAmount} />
      <div className="button" onClick={onReset}>
        <label>RESET</label>
      </div>
    </div>
  );
}

export default BillInfoAndReset;
