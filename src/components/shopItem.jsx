import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class ShopItem extends Component {
  render() {
    const { _id, price, title, image } = this.props.item;
    return (
      <div className="shop-item">
        <Link to={'/shop/item/' + _id}>
          <img
            src={require(`../static/shop/hats/${image}.jpg`).default}
            alt="hat"
          />
          <h5 className="item-title">{title}</h5>
          <p className="item-price">{price} eur</p>
        </Link>
      </div>
    );
  }
}

export default ShopItem;
