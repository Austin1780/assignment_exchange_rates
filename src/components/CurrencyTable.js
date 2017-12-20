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
    <div className="col-sm-6 col-sm-offset-3">
      <table className="table table-striped table-dark table-bordered">
        <thead>
          <tr>
            <th scope="col">Currency Name</th>
            <th scope="col">Exchange Rate</th>
          </tr>
        </thead>
        <tbody>{currenciesList}</tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;
