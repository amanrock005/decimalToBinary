import React, { useState } from "react";
import "./styles.css";

export default function DecimalToBinary() {
  const [decimal, setDecimal] = useState("");
  const [binary, setBinary] = useState("");

  const handleChange = (e) => {
    setDecimal(e.target.value);
  };

  const convertToBinary = () => {
    const decimalNumber = parseInt(decimal, 10);
    if (isNaN(decimalNumber)) {
      setBinary("please enter a valid decimal number");
      return;
    }
    setBinary(decimalNumber.toString(2));
  };

  return (
    <div className="container">
      <h1>Decimal to binary converter</h1>
      <input
        type="text"
        value={decimal}
        onChange={handleChange}
        placeholder="enter a decimal number"
      />
      <button onClick={convertToBinary}>Convert</button>
      {binary && <p>binary: {binary}</p>}
    </div>
  );
}
