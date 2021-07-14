import CartItem from './cartItem';
import React, { Component } from 'react';
// import { getCartItems } from '../../utils/requests';

class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCart: [],
    };
  }

  // perkelti currentCart state i cart componenta
  // perkelti susijusias funkcijas ir isitikinti kad currentCart veikia Cart componente
  // perduoti currentCart i cartList kaip props
  // atvaizduoti cart items is gauto props
  // suskaiciuoti cart Totalcart komponente

  render() {
    console.log('prooooooops', this.props.cartItems);
    return (
      <div>
        <div className="cart-columns d-flex">
          <h3 className="cart-col first">Product</h3>
          <h3 className="cart-col">Price</h3>
          <h3 className="cart-col">Quantity</h3>
          <h3 className="cart-col">Total</h3>
        </div>
        {this.props.cartItems.map((item) => (
          <CartItem
            onQuantity={this.props.onQuantity}
            key={item._id}
            item={item}
          />
        ))}
      </div>
    );
  }
}

export default CartList;
