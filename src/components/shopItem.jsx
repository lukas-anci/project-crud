import React, { Component } from 'react';
import mainImage from '../static/shop/hats/hat1.jpg';
class ShopItem extends Component {
  render() {
    return (
      <div className="shop-item">
        <img src={mainImage} alt="hat" />
        <h5 className="item-title">Blue Jeans</h5>
        <p className="item-price">99 eur</p>
      </div>
    );
  }
}

export default ShopItem;
