import React, { useState } from "react";
import "./App.css";
import bills from "./bills";

const todaysDate = new Date().getDate();
const overridePaycheck = window.location.href.match(/paycheck=(1|2)/i);
const paycheckToShow =
  (overridePaycheck && +overridePaycheck[1]) ||
  (todaysDate < 12 || 26 < todaysDate) + 1;

function toMoney(price) {
  return `$${price.toFixed(2)}`;
}

function BillLink({ url, children }) {
  if (!url) {
    return null;
  }
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      {children}
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
      value={`${budget ? "budget " : ""}${amount}, ${name}`}
    />
  );
}

function Bill({ budget, name, price, priceEstimate, url }) {
  return (
    <div className={`bill ${budget ? "budget" : null}`} key={name}>
      <div className="bill__title">
        {null != url ? <BillLink url={url}>{name}</BillLink> : name}
      </div>
      <div className="bill__price">{toMoney(price || priceEstimate)}</div>
    </div>
  );
}

function getBillsForPaycheck() {
  return bills.filter(({ paycheck }) => paycheck === paycheckToShow);
}

function renderBillsForPaycheck(component) {
  return getBillsForPaycheck().map(component);
}

function App() {
  const [isTextMode, setIsTextMode] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div className="textmode__field">
          <input
            type="checkbox"
            checked={isTextMode}
            onChange={e => setIsTextMode(e.currentTarget.checked)}
          />
        </div>
        {renderBillsForPaycheck(isTextMode ? BillEntry : Bill)}
      </header>
    </div>
  );
}

export default App;
