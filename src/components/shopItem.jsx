import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Price from './common/price';

class ShopItem extends Component {
  render() {
    const { _id, price, title, image, salePrice, quantity } = this.props.item;
    return (
      <div className="shop-item">
        <Link className="pos-rel" to={'/shop/item/' + _id}>
          <img
            className={quantity === 0 ? 'opacity' : ''}
            src={require(`../static/shop/${image}3.jpg`).default}
            alt={title}
          />
          <h5 className="item-title">{title}</h5>
          {quantity === 0 ? (
            <span>
              <strong>Out of Stock</strong>
            </span>
          ) : (
            <Price salePrice={salePrice}>{price}</Price>
          )}

          {salePrice && <span className="sale">Sale</span>}
        </Link>
      </div>
    );
  }
}

export default ShopItem;
