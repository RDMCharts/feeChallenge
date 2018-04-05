import '../style/styles.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';

  class CurrencyList extends Component {
    render() {
      return (
        <div className="App">
          <div>
            <Link to="/viewbtcusd">
              <Button className="ButtonStyle">
                View Current BTC/USD Trades
              </Button>
            </Link>
        </div>
        <div>
          <Link to="/viewethusd">
            <Button className="ButtonStyle">
              View Current ETH/USD Trades
            </Button>
          </Link>
        </div>
      </div>
      );
    }
  }

export default CurrencyList;
