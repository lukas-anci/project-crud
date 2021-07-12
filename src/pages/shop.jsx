import React, { Component } from 'react';
import ShopList from './../components/shopList';
import ShopSingleItem from './../components/shopSingleItem';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import SocialLinks from './../components/common/socialLinks';
import Cart from '../components/cart/Cart';
import Button from './../components/common/button/button';

class Shop extends Component {
  render() {
    const { shopCategories, socialLinksData, items, cart, users } =
      this.props.shop;

    // get cartCount prop and display

    return (
      <div className="shop-page ">
        <div className="shop-search-cart d-flex space-between mb-1">
          <div className="shop-search">
            <i className="fa fa-search"></i>
            <input type="search" placeholder="Search" />
          </div>
          <Link to="/shop/cart" className="shop-cart">
            <i className="fa fa-shopping-cart"></i> Cart(
            {this.props.cartCount && <span>{this.props.cartCount}</span>})
          </Link>
        </div>
        <div className="hr"></div>
        <div className="d-flex">
          <aside className="categories-aside">
            <div className="categories">
              <ul>
                {shopCategories.map((item) => {
                  return (
                    <li className="category-item" key={item._id}>
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <SocialLinks socialLink={socialLinksData} />
            <div className="hr"></div>
            <div className="users">
              <ul>
                <h3>Our Users</h3>
                {users.map((user) => {
                  return (
                    <li key={user.name}>
                      <p>
                        {user.name} {user.email}
                      </p>
                      <Button
                        onClick={() => this.props.onLogin(user._id, user.email)}
                        size="medium"
                      >
                        Login
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
          <main className="shop-list-part">
            <Route
              path="/shop/item/:id"
              render={(props) => (
                <ShopSingleItem
                  // item={items.find((i) => i._id === props.match.params.id)}
                  socialLinksData={socialLinksData}
                  items={items}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/shop/cart"
              render={(props) => <Cart cartItems={cart} {...props} />}
            />
            <Route
              exact
              path="/shop"
              render={(props) => <ShopList items={items} {...props} />}
            />
          </main>
        </div>
      </div>
    );
  }
}

export default Shop;
