import React from "react";

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
    <div className="w-full my-6 pt-5 rounded-[0.375rem] font-space-mono mb-[57px]">
      <label className="text-[1.25rem] font-bold leading-4">
        {props.label}
      </label>
      <div className="grid grid-cols-3 gap-4 mt-4 sm:gap-[0.8rem] sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
        {props.tipValues.map((value, index) => (
          <button
            key={index}
            className={`bg-[#00474b] text-[#feffff]  border-none rounded-[6px] cursor-pointer leading-[3rem] tracking-wide font-space-mono text-[1.875rem] font-bold text-center py-[0.625rem] max-sm:text-[1.3rem] sm:leading-[2.5rem] sm:py-2 md:text-[22x] md:leading-[2.2rem] md:py-1.5 lg:text-[2rem] lg:leading-[1.8rem] lg:py-4 ${props.selectedTip === value ? "bg-[#26c2ad]" : "hover:bg-gray-600"}`}
            onClick={() => handleButtonClick(value)}
          >
            {value}%
          </button>
        ))}
        <input
          type="number"
          className="bg-[#f3f8fb] text-black border-none rounded-[5px] text-center py-0 h-full w-full text-[30px] font-space-mono md:text-[26px] lg:text-[2rem] max-sm:text-[1.3rem]"
          placeholder="Custom"
          onChange={handleCustomTipChange}
        />
      </div>
    </div>
  );
}

export default SelectTip;
