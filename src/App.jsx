import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HeaderX from './components/headerX';
import Home from './pages/home';
import Shop from './pages/shop';

class App extends Component {
  state = {
    navLinks: [
      { to: '/', title: 'Home' },
      { to: '/shop', title: 'Shop' },
      { to: '/about', title: 'About' },
    ],
    shop: {
      shopCategories: [
        { _id: 1, title: 'Accessories' },
        { _id: 2, title: 'Denim' },
        { _id: 3, title: 'Footwear' },
        { _id: 4, title: 'Jeans' },
        { _id: 5, title: 'T-Shirts' },
      ],
      socialLink: [
        { to: 'www.facebook.com', icon: 'fa fa-facebook' },
        { to: 'www.twitter.com', icon: 'fa fa-twitter' },
        { to: 'www.instagram.com', icon: 'fa fa-instagram' },
      ],
      items: [
        {
          _id: 1,
          title: 'Rocco Flat Peak Cap - Fatigue',
          price: 399.95,
          image: 'hat1',
          color: 'Fatigue',
          size: 'normal',
        },
        {
          _id: 2,
          title: 'Rocco Flat Peak Cap - Navy',
          price: 399.95,
          image: 'hat2',
          color: 'Navy',
          size: 'normal',
        },
        {
          _id: 2,
          title: 'Hunter Baseball Cap - Olive',
          price: 1399.95,
          image: 'hatolive1',
          color: 'Olive',
          size: 'normal',
        },
      ],
    },
  };
  render() {
    return (
      <div className="App">
        <HeaderX navLinks={this.state.navLinks} />
        <div className="container">
          <Switch>
            <Route
              path="/shop"
              render={(props) => <Shop shop={this.state.shop} {...props} />}
            />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
