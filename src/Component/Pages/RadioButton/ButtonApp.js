import "./styles.css";
import React, { useState } from "react";
import { RadioButton } from "./RadioButton";

export default function ButtonApp() {
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const radioChangeHandler = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="ButtonApp">
      <h1>React Component (Radio Button) Example</h1>
      <div className="radio-btn-container" style={{ display: "flex" }}>
        <RadioButton
          changed={radioChangeHandler}
          id="1"
          isSelected={paymentMethod === "QuickPay"}
          label="QuickPay"
          value="QuickPay"
        />

        <RadioButton
          changed={radioChangeHandler}
          id="2"
          isSelected={paymentMethod === "COD"}
          label="Cash On Delivery"
          value="COD"
        />
      </div>
      {paymentMethod === "QuickPay" && (
        <input
          style={{ marginTop: "10px" }}
          type="text"
          placeholder="Enter transaction id"
        />
      )}
      <h2 style={{ marginTop: "25px" }}>
        The selected radio button value is = {paymentMethod}
      </h2>
    </div>
  );
}
