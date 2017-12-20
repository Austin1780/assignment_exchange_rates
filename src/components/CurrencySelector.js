import React, { Component } from "react";

const CurrencySelector = ({ abbr, currencySelect }) => {
  return (
    <div className="row">
    <span className="glyphicon glyphicon-piggy-bank" aria-hidden="true"></span>
    <select onChange={currencySelect}>
      {abbr.map(currencyName => {
        return <option value={currencyName}>{currencyName}</option>;
      })}
    </select>
    
    </div>

  );
};

export default CurrencySelector;
