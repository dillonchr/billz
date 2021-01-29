import React, { useState } from "react";
import "./App.css";
import bills from "./bills";
import Switch from "react-ios-switch";

const todaysDate = new Date().getDate();
const overridePaycheck = window.location.href.match(/paycheck=(1|2)/i);
const paycheckToShow =
  (overridePaycheck && +overridePaycheck[1]) ||
  (todaysDate < 12 || 26 < todaysDate) + 1;

function toMoney(price) {
  return `$${price.toFixed(2)}`;
}

function BillLink({ url }) {
  if (!url) {
    return null;
  }
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      Pay
    </a>
  );
}

function BillEntry({ budget, name, price }) {
  const amount = price ? price + 0.0 : "??";
  return (
    <input
      className="bill__textfield"
      key={name}
      readOnly
      type="text"
      value={`${budget ? "budget " : ""} ${amount}, ${name}`}
    />
  );
}

function Bill({ budget, name, price, priceEstimate, url }) {
  return (
    <div className={`bill ${budget ? "budget" : null}`} key={name}>
      <div className="bill__title">{name}</div>
      <div className="bill__price">{toMoney(price || priceEstimate)}</div>
      <div className="bill__link">
        <BillLink url={url} />
      </div>
    </div>
  );
}

function getBillsForPaycheck(component) {
  return bills
    .filter(({ paycheck }) => paycheck === paycheckToShow)
    .map(component);
}

function App() {
  const [isTextMode, setIsTextMode] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div className="textmode__field">
          <span className="textmode__label">Text Mode</span>
          <Switch
            checked={isTextMode}
            onChange={() => setIsTextMode(!isTextMode)}
            className="textmode__switch"
          />
        </div>
        {getBillsForPaycheck(isTextMode ? BillEntry : Bill)}
      </header>
    </div>
  );
}

export default App;
