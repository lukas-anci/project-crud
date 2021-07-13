import CartItem from './cartItem';
import React, { Component } from 'react';
import { getCartItems } from '../../utils/requests';

class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCart: [],
    };
  }

  async componentDidMount() {
    // get all cart items for current user
    const cartItems = await getCartItems(this.getUserIdFromSession());
    console.log(cartItems.data);
    this.setState({ currentCart: cartItems.data });
  }
  getUserIdFromSession() {
    const id = sessionStorage.getItem('loggedInUser');
    return id ? id : console.error('no id in session');
  }

  render() {
    console.log(' this.state.currentCart', this.state.currentCart);
    return (
      <div>
        <div className="cart-columns d-flex">
          <h3 className="cart-col first">Product</h3>
          <h3 className="cart-col">Price</h3>
          <h3 className="cart-col">Quantity</h3>
          <h3 className="cart-col">Total</h3>
        </div>
        {this.state.currentCart.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </div>
    );
  }
}

export default CartList;
