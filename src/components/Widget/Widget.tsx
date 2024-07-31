import styles from "./Widget.module.css";
export interface WidgetInfo {
  /**
   * Specifies the type of information this widget conveys.
   * Possible values are:
   * - "info": Indicates general information.
   * - "warning": Indicates a warning message.
   * - "error": Indicates an error message.
   */
  type: "info" | "warning" | "error";

  /**
   * The title of the text displayed in the widget.
   */
  textTitle: string;
  
  /**
   * The main text content displayed in the widget.
   */
  text: string;
}
export function Widget({ type, textTitle, text }: WidgetInfo) {
  return (
    <div className={`${styles["widget-container"]} ${styles[`${type}`]}`}>
      <div className={styles["widget-icon"]}>
        <img src={`${type}.svg`} alt={`${type} icon`} width={40} />
      </div>

      <strong className={styles["widget-title"]}>{textTitle}</strong>
      <div className={styles["widget-content-container"]}>
        <p className={styles["widget-content"]}>{text}</p>
      </div>
    </div>
  );
}
