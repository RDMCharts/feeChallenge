import '../style/styles.css';
import React, { Component } from 'react';

class TradeCard extends Component {

  renderCard() {
    const { price_open, price_close } = this.props.data;
    if (price_open < price_close) {
      return <div className="Success">
          Closing Price: {price_close}
        </div>
    } else if (price_open > price_close) {
      return <div className="Fail">
        Closing Price: {price_close}

      </div>
    } else if (price_open === price_close) {
        return <div className="Even">
          Closing Price: {price_close}
        </div>
    }
  }

  render() {
    return (
      <div className="Card">
        <div className="TimeStamp">
          {this.props.data.time_close}
        </div>
        {this.renderCard()}
      </div>
    );
  }
}

export default TradeCard;
