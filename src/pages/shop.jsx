import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Shop extends Component {
  render() {
    const { shopCategories, socialLink } = this.props.shop;
    return (
      <div className="shop-page">
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
            <ul>
              {socialLink.map((item) => {
                return (
                  <Link key={item.icon} className="nav-link-item" to={item.to}>
                    <i className={item.icon}></i>
                  </Link>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    );
  }
}

export default Shop;
