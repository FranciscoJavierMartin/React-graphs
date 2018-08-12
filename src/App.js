import React, { Component } from 'react';
import './App.css';
import Graph from './components/graph';

class App extends Component {

  constructor(){
    super();

    this.state={
      currencies: [
        {
          currencyName: 'Bitcoin',
          marketCap: 106330074359
        },
        {
          currencyName: 'Ethereum',
          marketCap: 32402945322
        },
        {
          currencyName: 'XRP',
          marketCap: 11864383092
        },
        {
          currencyName: 'Bitcoin Cash',
          marketCap: 9612908814
        },
        {
          currencyName: 'EOS',
          marketCap: 4644155391
        },
        {
          currencyName: 'Stellar',
          marketCap: 4084424747
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Graph 
          currencies={this.state.currencies}
          graphTitle="Top 6 Cryptocurrencies"/>
      </div>
    );
  }
}

export default App;
