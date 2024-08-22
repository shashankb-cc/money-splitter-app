// src/components/splitter/TipInputForm/TipInputForm.tsx

import NumberInput from "../NumberInput";
import SelectTip from "../SelectTipContainer";

interface TipInputFormProps {
  billValue: number;
  peopleValue: number;
  selectedTipValue: number | null;
  onBillChange: (value: number) => void;
  onPeopleChange: (value: number) => void;
  onTipSelect: (value: number | null) => void;
  onCustomTipChange: (value: number) => void;
  billError?: string;
  peopleError?: string;
}

export function TipInputForm({
  billValue,
  peopleValue,
  selectedTipValue,
  onBillChange,
  onPeopleChange,
  onTipSelect,
  onCustomTipChange,
  billError,
  peopleError,
}: TipInputFormProps) {
  return (
    <div className="w-full max-w-[526px] mt-[1.5%] mr-[66px] lg:w-full lg:mr-[2rem] lg:my-8 sm:max-w-[80%] max-sm:mx-auto max-sm:mb-9">
      <NumberInput
        value={billValue}
        typeofIcon="dollar"
        label="Bill"
        onChange={onBillChange}
        error={billError}
      />
      <SelectTip
        label="Select Tip %"
        tipValues={[5, 10, 15, 20, 50]}
        selectedTip={selectedTipValue}
        onSelect={onTipSelect}
        onCustomTipChange={onCustomTipChange}
      />
      <NumberInput
        value={peopleValue}
        typeofIcon="person"
        label="Number of People"
        onChange={onPeopleChange}
        error={peopleError}
      />
    </div>
  );
}

export default TipInputForm;
