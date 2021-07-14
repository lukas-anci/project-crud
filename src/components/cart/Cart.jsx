import React, { Component } from 'react';
import { getCartItems, sendUpdateQty } from '../../utils/requests';
import Button from '../common/button/button';
import CartList from './cartList';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartTotal: 0,
      currentCart: [],
    };
  }

  calculateTotal(items) {
    return items.reduce(
      (acc, curr) => acc + curr.quantity * (curr.salePrice || curr.price),
      0
    );
  }

  async componentDidMount() {
    // get all cart items for current user
    const cartItems = await getCartItems(this.getUserIdFromSession());
    if (Object.keys(cartItems).length !== 0) {
      this.setState({
        currentCart: cartItems,
        cartTotal: this.calculateTotal(cartItems),
      });
      console.log('total:', this.calculateTotal(cartItems));
    }
    console.log(
      'yoyo',
      this.state.currentCart.map((i) => i.quantity).reduce((a, c) => a + c)
    );
  }
  getUserIdFromSession() {
    const id = sessionStorage.getItem('loggedInUser');
    return id ? id : console.error('no id in session');
  }

  updateQuantity = (itemId, newQty) => {
    // iskviesti is cartItem el
    sendUpdateQty(this.getUserIdFromSession(), itemId, newQty);
  };

  render() {
    return (
      <div>
        <div className="cartList mb-2">
          <CartList
            onQuantity={this.updateQuantity}
            cartItems={this.state.currentCart}
          />
        </div>
        <div className="d-flex">
          <div className="cart__instructions">
            <label htmlFor="instructions mb-1">
              Special instructions for seller
            </label>
            <br />
            <textarea name="" id="instructions" cols="30" rows="10"></textarea>
          </div>
          <div className="cart-info">
            <h4 className="cart__title">
              Subtotal <span>{this.state.cartTotal} eur</span>
            </h4>
            <i>Taxes and shipping calculated at checkout</i>
            <Button outline>Continue Shopping</Button>
            <br />
            <Button>Checkout</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
