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
    <div className="flex flex-col text-[#5d6b6c] font-mono w-full max-w-[600px] lg:max-w-full max-sm:w-full">
      <label
        htmlFor="numberInput"
        className="font-semibold mb-2"
        style={{ fontSize: "1.25rem" }}
      >
        {props.label}
      </label>
      <div
        className={`border-2 border-transparent flex items-center rounded-lg hover:border-[#2CC0AD] bg-[#f3f8fb] ${
          props.error ? "border-[#b03034]" : ""
        }`}
      >
        <img
          src={icon}
          alt={`${props.typeofIcon} Icon`}
          className="ml-[0.7rem]"
          style={{ width: "25px", height: "25px" }}
        />
        <input
          type="number"
          className="text-[2rem] font-bold leading-[1.5] px-[30px] py-[8px] text-right border-none outline-none flex-grow bg-transparent max-sm:text-[1.2rem] max-sm:pr-3"
          value={props.value || ""}
          onChange={(event) => props.onChange(Number(event.target.value))}
          autoFocus
        />
      </div>
      <div className="h-4">
        {props.error && (
          <p className="text-red-600 text-[1.rem] font-bold">{props.error}</p>
        )}
      </div>
    </div>
  );
}

export default NumberInput;
