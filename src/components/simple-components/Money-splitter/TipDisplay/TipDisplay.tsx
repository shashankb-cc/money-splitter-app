import "./TipDisplay.css";

interface DisplayProps {
  label: string;
  value: string;
}

function TipDisplay(props: DisplayProps) {
  return (
    <div className="splitter-display">
      <label className="splitter-display-name">
        {props.label}
        <span>/ person</span>
      </label>
      <div className="splitter-display-value">
        <span className="splitter-display-dollar">$</span>
        <span className="splitter-display-cost">{props.value}</span>
      </div>
    </div>
  );
}

export default TipDisplay;
