import "./TipButton.css";

export interface TipButtonProps {
  styleName?: string;
  label: string;
}

function TipButton(props: TipButtonProps) {
  return (
    <button className={`splitter-tip-button ${props.styleName || ""}`}>
      {props.label}
    </button>
  );
}

export default TipButton;
