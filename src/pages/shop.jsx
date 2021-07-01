import React, { Component } from 'react';
import ShopList from './../components/shopList';
import ShopSingleItem from './../components/shopSingleItem';
import { Route, Switch } from 'react-router';

class Shop extends Component {
  render() {
    const { shopCategories, socialLink, items } = this.props.shop;
    return (
      <div className="shop-page d-flex">
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
          <div className="social">
            {socialLink.map((item) => {
              return (
                <a
                  key={item.icon}
                  href={item.to}
                  _target="_blank"
                  className="social__link"
                >
                  <i className={item.icon}></i>
                </a>
              );
            })}
          </div>
        </aside>
        <main>
          <Route
            path="/shop/item/1"
            render={(props) => <ShopSingleItem items={items} {...props} />}
          />
          <Route
            exact
            path="/shop"
            render={(props) => <ShopList items={items} {...props} />}
          />
        </main>
      </div>
    );
  }
}

export default Shop;
