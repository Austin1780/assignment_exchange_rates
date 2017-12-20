import React, { Component } from "react";
import logo from "../logo.png";
import "../App.css";
import CurrencyTable from "./CurrencyTable";
import CurrencySelector from "./CurrencySelector";

const App = ({ currencies, isFetching, error, currencySelect }) => {
  let abbr = currencies.map(currency => {
    return currency.abbr;
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Welcome to Currency Exchange <br />£££ --> $$$
        </h1>
      </header>
      <CurrencySelector abbr={abbr} currencySelect={currencySelect} />
      <CurrencyTable currencies={currencies} isFetching={isFetching} />
    </div>
  );
};

export default App;
