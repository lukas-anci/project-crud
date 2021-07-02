import React, { Component } from 'react';
import ShopList from './../components/shopList';
import ShopSingleItem from './../components/shopSingleItem';
import { Route } from 'react-router';
import SocialLinks from './../components/common/socialLinks';

class Shop extends Component {
  render() {
    const { shopCategories, socialLinksData, items } = this.props.shop;
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
          <SocialLinks socialLink={socialLinksData} />
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
