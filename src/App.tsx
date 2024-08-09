import "./App.css";
import { TipInputForm } from "./components/splitter/TipInputForm/TipInputForm";
import { BillInfoAndReset } from "./components/splitter/BillInfoAndReset/BillInfoAndReset";
import { Header } from "./components/splitter/Header/Header";
import { useEffect, useReducer } from "react";
import React from "react";

interface InitialStateProps {
  billValue: number;
  peopleValue: number;
  selectedTipValue: number | null;
  tipAmount: number;
  totalAmount: number;
}

const initialState: InitialStateProps = {
  billValue: 0,
  peopleValue: 1,
  selectedTipValue: null,
  tipAmount: 0,
  totalAmount: 0,
};

type Action =
  | { type: "SET_BILL_VALUE"; value: number }
  | { type: "SET_PEOPLE_VALUE"; value: number }
  | { type: "SET_SELECTED_TIP"; value: number | null }
  | { type: "RESET" }
  | { type: "CALCULATE_TOTALS" };

function reducer(state: InitialStateProps, action: Action): InitialStateProps {
  switch (action.type) {
    case "SET_BILL_VALUE":
      return { ...state, billValue: action.value };
    case "SET_PEOPLE_VALUE":
      return { ...state, peopleValue: action.value };
    case "SET_SELECTED_TIP":
      return { ...state, selectedTipValue: action.value };
    case "RESET":
      return initialState;
    case "CALCULATE_TOTALS":
      const tipPercentage = state.selectedTipValue;
      if (tipPercentage !== null && state.peopleValue > 0) {
        const tip = (state.billValue * tipPercentage) / 100 / state.peopleValue;
        return {
          ...state,
          tipAmount: tip,
          totalAmount:
            (state.billValue + tip * state.peopleValue) / state.peopleValue,
        };
      }
      return state;
    default:
      return state;
  }
}

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleBillChange = (newValue: number) => {
    dispatch({ type: "SET_BILL_VALUE", value: newValue });
  };

  const handlePeopleChange = (newValue: number) => {
    dispatch({ type: "SET_PEOPLE_VALUE", value: newValue });
  };

  const handleTipSelect = (value: number | null) => {
    dispatch({ type: "SET_SELECTED_TIP", value });
  };

  const handleCustomTipChange = (value: number) => {
    if (value >= 0) {
      dispatch({ type: "SET_SELECTED_TIP", value });
    }
  };

  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTALS" });
  }, [state.billValue, state.peopleValue, state.selectedTipValue]);

  const billError = () => {
    if (state.billValue < 0) {
      return "Bill Value can't be less than Zero";
    }
  };

  const peopleError = () => {
    if (state.peopleValue < 0) {
      return "Number of People can't be less than Zero";
    } else if (state.peopleValue % 1 !== 0) {
      return "Number of People can't be a decimal number";
    } else if (state.peopleValue === 0) {
      return "Number of People can't be Zero";
    }
  };

  return (
    <React.StrictMode>
      <div className="header">
      <Header />
      </div>
      <div className="container">
        <TipInputForm
          billValue={state.billValue}
          peopleValue={state.peopleValue}
          selectedTipValue={state.selectedTipValue}
          onBillChange={handleBillChange}
          onPeopleChange={handlePeopleChange}
          onTipSelect={handleTipSelect}
          onCustomTipChange={handleCustomTipChange}
          billError={billError()}
          peopleError={peopleError()}
        />
        <BillInfoAndReset
          tipAmount={state.tipAmount.toFixed(2)}
          totalAmount={state.totalAmount.toFixed(2)}
          onReset={() => dispatch({ type: "RESET" })}
        />
      </div>
    </React.StrictMode>
  );
}
