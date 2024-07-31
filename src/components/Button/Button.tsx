import "./Button.css";
interface ButtonProps {
  label: string;
}
export function Button(props: ButtonProps) {
  return (
    <div className="button">
      <label>{props.label}</label>
    </div>
  );
}
export default Button;
