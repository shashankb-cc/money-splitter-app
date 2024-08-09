import "./Button.css";

interface ButtonProps {
  label: string;
  onClick: () => void; // Added onClick prop
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <div className="button" onClick={onClick}>
      <label>{label}</label>
    </div>
  );
}

export default Button;
