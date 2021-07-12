import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HeaderX from './components/headerX';
import Home from './pages/home';
import Shop from './pages/shop';
import Footer from './components/footer';

import { getCategories, getItems, getUsers } from './utils/requests';
import Admin from './pages/admin';
class App extends Component {
  state = {
    currentUser: {},
    navLinks: [
      { to: '/', title: 'Home' },
      { to: '/shop', title: 'Shop' },
      { to: '/about', title: 'About' },
      { to: '/admin', title: 'Admin' },
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
    shopCopy.shopCategories = await getCategories();
    shopCopy.items = await getItems();
    shopCopy.users = await getUsers();
    this.setState({ shop: shopCopy });
  }
  handleLogin = (userId, email) => {
    sessionStorage.setItem('loggedInUser', userId);
    sessionStorage.setItem('loggedInUserEmail', email);
    this.setState({ currentUser: { _id: userId, email: email } });
  };

  render() {
    const { navLinks, shop, currentUser } = this.state;
    return (
      <div className="App">
        <HeaderX currentUser={currentUser} navLinks={navLinks} />
        <div className="container">
          <Switch>
            <Route
              path="/shop"
              render={(props) => (
                <Shop onLogin={this.handleLogin} shop={shop} {...props} />
              )}
            />
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </div>
        <Footer navLinks={navLinks} />
      </div>
    );
  }
}

export default App;
