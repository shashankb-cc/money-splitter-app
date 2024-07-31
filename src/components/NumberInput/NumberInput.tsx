import React, { useState, useEffect } from "react";
import "./NumberInput.css";

export interface NumberInputProps {
  /**
   * Label identifies the input field
   */
  label: string;
  /**
   * type of icon
   */
  typeofIcon: "person" | "dollar";
}

export function NumberInput(props: NumberInputProps) {
  const [value, setValue] = useState<number | string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (typeof value === "number" && value < 0) {
      setError("Bill value cannot be less than zero");
    } else {
      setError("");
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setValue(e.target.value === "" ? "" : val);
  };

  return (
    <div className="numberInputContainer">
      <label htmlFor="numberInputField" className="numberInputLabel">
        {props.label}
      </label>
      <div className={`inputContainer  ${error ? "error" : ""}`}>
        <img className="icon" src={`${props.typeofIcon}.svg`} alt="Icon" />
        <input
          type="number"
          className={`numberInputField ${error ? "error" : ""}`}
          placeholder="0"
          value={value}
          onChange={handleChange}
        />
        {error && <span className="error-message">{error}</span>}
      </div>
    </div>
  );
}

export default NumberInput;

// import { ChangeEvent, useEffect, useId, useState } from "react";
// import "./NumberInput.css";
// export interface NumberInputProps extends React.ComponentProps<"input"> {
//   /**
//    * Label of the Input
//    */
//   label: string;
//   /**
//    * Type of the icon
//    */
//   iconType: "person" | "dollar";
//   /**
//    * Error message that will be displayed on wrong input
//    */
//   errorMessage?: string;
//   /**
//    * Condition that returns true if the value is invalid otherwise false
//    */
//   isValidInput?: (value: number) => boolean;
//   /**
//    * Minimum allowed value
//    */
//   minValue?: number;
// }
// const iconPaths = {
//   dollar: "src/components/NumberInput/assets/input-icons/dollar-icon.svg",
//   person: "src/components/NumberInput/assets/input-icons/person-icon.svg",
// };
// export const NumberInput = ({
//   label,
//   iconType,
//   errorMessage,
//   isValidInput,
//   minValue = 0,
//   ...delegated
// }: NumberInputProps) => {
//   const [value, setValue] = useState(0);
//   const [inputClass, setInputClass] = useState(`numberInput `);
//   const [touched, setTouched] = useState(false);
//   const [error, setError] = useState("");
//   const uniqueId = useId();
//   const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
//     setValue(Number(e.target.value));
//     setTouched(true);
//   };
//   useEffect(() => {
//     if (touched) {
//       if (isValidInput && isValidInput(value)) {
//         setInputClass(`numberInput error}`);
//         setError(errorMessage ?? "");
//       } else if (value < minValue) {
//         setInputClass(`numberInput error`);
//         setError(`${label} must be at least ${minValue}`);
//       } else {
//         setInputClass("numberInput");
//         setError("");
//       }
//     }
//   }, [value, errorMessage, touched, minValue, label, isValidInput]);
//   return (
//     <div className={"container"}>
//       <label className={"label"} htmlFor={`${uniqueId}number-input`}>
//         {label}
//       </label>
//       <div className={"inputContainer"}>
//         <input
//           type="number"
//           id={`${uniqueId}number-input`}
//           className={inputClass}
//           placeholder="0"
//           onChange={inputHandle}
//           min={`${minValue}`}
//           {...delegated}
//         />
//         <div className={"iconContainer"}>
//           <img
//             src={iconPaths[iconType]}
//             width={iconType === "dollar" ? 14 : 18}
//             alt={`${iconType}-icon`}
//           />
//         </div>
//       </div>
//       <p className={`errorMessage`}>{error}</p>
//     </div>
//   );
// };
