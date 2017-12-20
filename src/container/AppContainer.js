import React, { Component } from "react";
import App from "../components/App";

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      base:"EUR",
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

  currencySelect = async (e) => {
    //  https://api.fixer.io/latest?base=USD
    let base = e.target.value;
    try{
      this.setState({isFetching:true});
      let data = await fetch(`https://api.fixer.io/latest?base=${base}`);
      let json=data.json();
      let currencies = [];
      console.log(json);
        Object.keys(json.rates).forEach(key => {
          currencies.push({ abbr: key, rate: json.rates[key] });
        });
      this.setState({currencies:currencies, base:base, isFetching:false})

    }catch(e){
      console.error(e)
    };


  };

  render() {
    return <App currencySelect={this.currencySelect} {...this.state} />;
  }
}

export default AppContainer;
