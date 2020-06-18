import React, { useState } from "react";
import "./tipCalculator.scss";
export const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercent, setTipPercent] = useState(0);
  const [people, setPeople] = useState("");
  const [tipAmount, setTipAmount] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setTipAmount((billAmount * tipPercent) / people);
  };

  const percentChangeHandler = (e) => setTipPercent(e.target.value);
  const peopleChangeHandler = (e) => setPeople(e.target.value);
  const billChangeHandler = (e) => setBillAmount(e.target.value);

  return (
    <main className="tip-calc-app">
      <h2 className="title">TIP CALCULATOR</h2>
      <form action="" className="tip-calc-form">
        <label htmlFor="Bill Amount">
          How much was your bill?
          <br />
          <input
            // placeholder="Bill Amount"
            value={billAmount}
            className="bill"
            placeholder="Bill Amount"
            onChange={billChangeHandler}
          />
        </label>

        <label htmlFor="service rating">
          How was your service?
          <br />
          <select
            id="service"
            className="tip-calc-service"
            value={tipPercent}
            onChange={percentChangeHandler}
          >
            <option disabled value="0">
              Choose an Option
            </option>
            <option value=".1">Service not good 10%</option>
            <option value=".2">Service was good 20%</option>
            <option value=".3">Service was great 30%</option>
          </select>
        </label>
        <label htmlFor="Amount of People">
          How many people are <br />
          sharing the bill?
          <input
            placeholder="Number of People"
            type="text"
            className="tip-calc-people-amount"
            value={people}
            onChange={peopleChangeHandler}
          />
        </label>

        <button className="calculate" onClick={handleClick}>
          Calculate
        </button>
        <sup></sup>
        <span className="tip"></span>
        <small className="each">${tipAmount}</small>
      </form>
    </main>
  );
};
