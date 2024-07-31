import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/ResetDiv/ResetDiv.css";
import "./components/NumberInput/NumberInput.css";
import "./components/SelectTip/SelectTip.css";
import NumberInput from "./components/NumberInput/NumberInput";
import SelectTip from "./components/SelectTip";
import ResetField from "./components/ResetField";
import Button from "./components/Button/Button";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container">
      <div className="select-container">
        <NumberInput typeofIcon="dollar" label="Bill" />
        <SelectTip
          label={"Select Tip %"}
          value1={5}
          value2={10}
          value3={15}
          value4={20}
          value5={50}
        />
        <NumberInput typeofIcon="person" label="Number of People" />
      </div>
      <div className="resetDiv">
        <ResetField label1="Tip Amount" label2="person" price="0.00" />
        <ResetField label1="Total" label2="person" price="0.00" />
        <Button label="RESET" />
      </div>
    </div>
  </React.StrictMode>
  // <React.StrictMode>
  //   <NumberInput typeofIcon="dollar" label="Bill" />
  // </React.StrictMode>
);
