import React, { Component } from 'react';

class ShopItem extends Component {
  render() {
    const { price, title, image } = this.props.item;
    return (
      <div className="shop-item">
        <img
          src={require(`../static/shop/hats/${image}.jpg`).default}
          alt="hat"
        />
        <h5 className="item-title">{title}</h5>
        <p className="item-price">{price} eur</p>
      </div>
    );
  }
}

export default ShopItem;
