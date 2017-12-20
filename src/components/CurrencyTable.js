import React, { Component } from "react";

const CurrencyTable = ({ currencies, isFetching }) => {
  const currenciesList = currencies.map(currency => {
    return (
      <tr>
        <td>{currency.abbr}</td>
        <td>{currency.rate}</td>
      </tr>
    );
  });
  return isFetching ? (
    <p>Loading...</p>
  ) : (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">Currency Name</th>
          <th scope="col">Exchange Rate</th>
        </tr>
      </thead>
      <tbody>{currenciesList}</tbody>
    </table>
  );
};

export default CurrencyTable;
