import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CartItem extends Component {
  state = {
    qty: 1,
  };
  handleQty = ({ target }) => {
    this.setState({ qty: target.value });
  };
  componentDidMount() {
    const { image, quantity } = this.props.item;
    this.setState({ qty: quantity });
  }

  render() {
    console.log(this.props);
    const { price, image, title, color, size } = this.props.item;
    return (
      <div className="cart-item d-flex">
        <div className="item-preview d-flex cart-col first">
          <Link to="/">
            <img src="https://placeimg.com/150/100/people" alt="sdsds" />
          </Link>
          <div className="order-item-info">
            <Link to="/">
              <h4>{title}</h4>
            </Link>
            <p>
              {color} / {size}
            </p>
            <button>remove</button>
          </div>
        </div>

        <div className="cart-col">
          <h3 className="d-upto-800">Price</h3>
          <h3 className="price">{price} eur</h3>
        </div>
        <div className="cart-col">
          <h3 className="d-upto-800">Quantity</h3>
          <input
            className="cart-qty"
            type="number"
            value={this.state.qty}
            onChange={this.handleQty}
          />
        </div>
        <div className="cart-col">
          <h3 className="d-upto-800">Total</h3>
          <h3 className="price-total">1000 eur</h3>
        </div>
      </div>
    );
  }
}

export default CartItem;
