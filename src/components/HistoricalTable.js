import React, { Component } from "react";

const HistoricalTable = ({
  historicalRates,
  isFetching,
  currency1,
  currency2,
  date
}) => {
  const ratesList = historicalRates.map(historicalRate => {
    return (
      <tr>
        <td>{historicalRate.year}</td>
        <td>{historicalRate.rates}</td>
      </tr>
    );
  });
  return isFetching ? (
    <p>Loading...</p>
  ) : (
    <div className="col-sm-6">
      <h3>
        {currency1} to {currency2} on {date}
      </h3>
      <table className="table table-striped table-dark table-bordered">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Exchange Rate</th>
          </tr>
        </thead>
        <tbody>{ratesList}</tbody>
      </table>
    </div>
  );
};

export default HistoricalTable;
