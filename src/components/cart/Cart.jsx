import React, { Component } from 'react';
import { getCartItems, sendUpdateQty, removeItem } from '../../utils/requests';
import Button from '../common/button/button';
import CartList from './cartList';
import { toast } from 'react-toastify';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartTotal: 0,
      currentCart: [],
    };
  }

  removeItemFromCart = async (cartItemId) => {
    const currentUserId = sessionStorage.getItem('loggedInUser');
    const deleteResult = await removeItem(currentUserId, cartItemId);
    console.log(deleteResult);
    if (deleteResult.cart) {
      await this.getCurrentCartItems();
      this.props.onCartCount();
      toast.error('Item removed from cart');
    }
  };

  calculateTotal(items) {
    return items.reduce(
      (acc, curr) => acc + curr.quantity * (curr.salePrice || curr.price),
      0
    );
  }

  async getCurrentCartItems() {
    const cartItems = await getCartItems(this.getUserIdFromSession());
    if (Object.keys(cartItems).length !== 0) {
      this.setState({
        currentCart: cartItems,
        cartTotal: this.calculateTotal(cartItems),
      });
    }
  }

  async componentDidMount() {
    this.getCurrentCartItems();
  }
  getUserIdFromSession() {
    const id = sessionStorage.getItem('loggedInUser');
    return id ? id : console.error('no id in session');
  }

  updateQuantity = async (itemId, newQty) => {
    // iskviesti is cartItem el
    const updateOk = await sendUpdateQty(
      this.getUserIdFromSession(),
      itemId,
      newQty
    );
    if (updateOk === true) {
      // atnaujinti itemus
      console.log(
        'ruosiames atnaujinti itemus, nes panasu kad pasikeite kiekis'
      );
      await this.getCurrentCartItems();

      return true;
    }
  };

  render() {
    return (
      <div>
        <div className="cartList mb-2">
          <CartList
            onQuantity={this.updateQuantity}
            cartItems={this.state.currentCart}
            onRemove={this.removeItemFromCart}
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
              Subtotal <span>{this.state.cartTotal.toFixed(2)} eur</span>
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
