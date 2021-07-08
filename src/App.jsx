import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HeaderX from './components/headerX';
import Home from './pages/home';
import Shop from './pages/shop';
import Footer from './components/footer';
import axios from 'axios';
import request from './utils/requests';
class App extends Component {
  state = {
    navLinks: [
      { to: '/', title: 'Home' },
      { to: '/shop', title: 'Shop' },
      { to: '/about', title: 'About' },
    ],
    shop: {
      shopCategories: [],
      socialLinksData: [
        { to: 'www.facebook.com', icon: 'fa fa-facebook', title: 'share' },
        { to: 'www.twitter.com', icon: 'fa fa-twitter', title: 'tweet' },
        { to: 'www.instagram.com', icon: 'fa fa-instagram', title: 'pin it' },
      ],
      items: [],
      cart: {
        randomId458: [
          {
            _id: 1,
            title: 'Green hat',
            price: 99.99,

            image: 'acc_hat_01_',
            color: 'green',
            size: 'normal',
            sku: 'hat_01',
            quantity: 1,
          },
          {
            _id: 2,
            title: 'Feather Slim Fit Denim Jeans',
            price: 1299.95,
            image: 'denim_01_',
            color: 'indigo',
            size: 'normal',
            sku: '01',
            quantity: 2,
          },
        ],
      },
      users: [
        {
          name: 'Bob Stoned',
          email: 'bob@bob.com',
          password: 'pass',
        },
        // sukurti model User
        // sukurti route gauti visiems useriams
        // route gauti konkreciam user pagal id
        // route prideti nauja useri
      ],
    },
  };
  async componentDidMount() {
    console.log('app jsx mounted');

    const shopCopy = { ...this.state.shop };
    shopCopy.shopCategories = await request.getCategories();
    shopCopy.items = await request.getItems();
    shopCopy.users = await request.getUsers();
    this.setState({ shop: shopCopy });
  }

  render() {
    const { navLinks, shop } = this.state;
    return (
      <div className="App">
        <HeaderX navLinks={navLinks} />
        <div className="container">
          <Switch>
            <Route
              path="/shop"
              render={(props) => <Shop shop={shop} {...props} />}
            />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer navLinks={navLinks} />
      </div>
    );
  }
}

export default App;
