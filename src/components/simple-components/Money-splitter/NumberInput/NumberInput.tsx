import { useEffect, useState } from "react";
import "./NumberInput.css";

interface InputProps {
  label: string;
  img: string;
  name: string;
  id: string;
}

function NumberInput(props: InputProps) {
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
    <div className="splitter-input-block">
      <label className="splitter-input-label">{props.label}</label>
      <div className={`splitter-input-group ${error ? "error" : ""}`}>
        <span className="splitter-input-append">
          <img src={props.img} alt={props.img} />
        </span>
        <input
          className="splitter-input"
          type="number"
          name={props.name}
          id={props.id}
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
