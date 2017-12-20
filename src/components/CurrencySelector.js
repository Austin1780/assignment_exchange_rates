import React, { Component } from "react";

const CurrencySelector = ({ abbr }) => {
  return (
    <select>
      {abbr.map(currencyName => {
        return <option value={currencyName}>{currencyName}</option>;
      })}
    </select>
  );
};

export default CurrencySelector;
