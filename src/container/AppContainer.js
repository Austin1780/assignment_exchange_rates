import React, { Component } from "react";
import App from "../components/App";

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      isFetching: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch("https://api.fixer.io/latest")
      .then(response => response.json())
      .then(json => {
        let currencies = [];
        Object.keys(json.rates).forEach(key => {
          currencies.push({ abbr: key, rate: json.rates[key] });
        });
        this.setState({
          currencies: currencies,
          isFetching: false
        });
      });
  }

  currencySelect = e => {
    //  https://api.fixer.io/latest?base=USD
  };

  render() {
    return <App {...this.state} />;
  }
}

export default AppContainer;
