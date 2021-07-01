import React, { Component } from 'react';
import ShopList from './../components/shopList';

class Shop extends Component {
  render() {
    const { shopCategories, socialLink } = this.props.shop;
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
          <ShopList />
        </main>
      </div>
    );
  }
}

export default Shop;
