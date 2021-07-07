import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Price from './common/price';

class ShopItem extends Component {
  render() {
    const { _id, price, title, image, salePrice } = this.props.item;
    return (
      <div className="shop-item">
        <Link to={'/shop/item/' + _id}>
          <img
            src={require(`../static/shop/${image}3.jpg`).default}
            alt={title}
          />
          <h5 className="item-title">{title}</h5>
          <Price salePrice={salePrice}>{price}</Price>
        </Link>
      </div>
    );
  }
}

export default ShopItem;
