import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getSingleItem } from '../../utils/requests';
import Button from '../common/button/button';
class CartItem extends Component {
  state = {
    qty: 0,
    image: '',
    total: null,
    maxItemInStock: null,
  };

  // gauti individualu kiek itemu ir irasyti ji i maxItemStock
  /**
   * @returns {Number} items left in stock
   */
  async getCurrentWarehouseStock() {
    // pasinaudoti getSingleItem fn ir gauti item kieki
    const itemId = this.props.item.itemId;
    const shopItem = await getSingleItem(itemId);
    // console.log('shopItem.quantity', shopItem.quantity);
    return shopItem.quantity;
  }
  getTotal() {
    return this.state.qty * this.props.item.price;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.qty !== this.state.qty) {
      this.setState({ total: this.getTotal() });
      (async () => {
        const warehouseQty = await this.getCurrentWarehouseStock();
        console.log({ warehouseQty });
      })();
    }
  }
  fixMaxItemStock(newCartQty) {
    const { qty: itemsInCart, maxItemInStock } = this.state;
    // what is total item qty
    const itemQtyCartAndWarehouse = +itemsInCart + maxItemInStock;
    // if we try to set it to more return max
    if (newCartQty > itemQtyCartAndWarehouse) {
      // jei bandom ivesti daugiau nei turim krepselyje ir liko sandelyje tai grzinam
      return itemQtyCartAndWarehouse;
    }
    return newCartQty;
  }
  handleQty = ({ target }) => {
    // call fixMaxItemStock

    if (target.value < 0) return;
    this.setState({ qty: this.fixMaxItemStock(target.value) });

    // cia iskviesti updateQuantity ir paduoti id ir nauja value
    this.props.onQuantity(
      this.props.item._id,
      this.fixMaxItemStock(target.value)
    );
  };
  componentDidMount() {
    // IFFE immediately invoked fn expression
    (async () => {
      const warehouseQty = await this.getCurrentWarehouseStock();
      console.log({ warehouseQty });
      const { image, quantity } = this.props.item;
      const imgImported = require(`../../static/shop/${image}1.jpg`).default;
      await this.setState({
        qty: quantity,
        image: imgImported,
        total: this.getTotal(),
        maxItemInStock: warehouseQty,
      });
    })();
  }

  render() {
    const { price, title, color, size, itemId } = this.props.item;
    return (
      <div className="cart-item d-flex">
        <div className="item-preview d-flex cart-col first">
          <Link to="/">
            <img src={this.state.image} alt="sdsds" />
          </Link>
          <div className="order-item-info">
            <Link to="/">
              <h4>{title}</h4>
            </Link>
            <p>
              {color} / {size}
            </p>
            <Button onClick={() => this.props.onRemove(itemId)} link>
              Remove
            </Button>
          </div>
        </div>

        <div className="cart-col">
          <h3 className="d-upto-800">Price</h3>
          <h3 className="price">{+price.toFixed(2)} eur</h3>
        </div>
        <div className="cart-col">
          <h3 className="d-upto-800">Quantity</h3>
          <input
            min="0"
            className="cart-qty"
            type="number"
            value={this.state.qty}
            onChange={this.handleQty}
          />
        </div>
        <div className="cart-col">
          <h3 className="d-upto-800">Total</h3>
          <h3 className="price-total">
            {this.state.total && +this.state.total.toFixed(2)}
          </h3>
        </div>
      </div>
    );
  }
}

export default CartItem;
