import '../style/styles.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TradeCard from './TradeCard';

class ViewEthUsd extends Component {
  state = { ethusd: [] };

  componentWillMount() {
    const apikey = "1BB89F87-A6F5-4366-B7E9-1E0BEF3366B9";
      axios.get(`https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_ETH_USD/latest?period_id=1MIN&apikey=${apikey}`)
      .then(response => {this.setState({ethusd: response.data});
        })
           .catch((err) => {
             console.log(err);
           });
         }

  renderCurrencies() {
    return this.state.ethusd.map((item, index) => {
      return (
        <div key={index}>
            <TradeCard
              data={item}
            />
        </div>
      );
    })
  }

  render() {
    return (
      <div className="App">
          <header className="App-header">
              <h1 className="App-title"><Link className="BackButton" to="/">Back</Link>Current Trades ETH/USD</h1>
          </header>
        <div>
          {this.renderCurrencies()}
        </div>
      </div>
    );
  }
}

export default ViewEthUsd;
