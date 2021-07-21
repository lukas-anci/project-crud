import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HeaderX from './components/headerX';
import Home from './pages/home';
import Shop from './pages/shop';
import Footer from './components/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  getCategories,
  getItems,
  getUsers,
  getCartCount,
  getItemsByCategory,
} from './utils/requests';
import Admin from './pages/admin';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        ],
      },
      cartCount: null,
    };
  }

  async componentDidMount() {
    console.log('app jsx mounted');
    this.logInUserIfInSession();
    const shopCopy = { ...this.state.shop };
    shopCopy.shopCategories = await getCategories();
    shopCopy.items = await getItems();
    shopCopy.users = await getUsers();
    this.setState({ shop: shopCopy });
  }
  async logInUserIfInSession() {
    // check if user is in sesssion, set if it is
    const currentUserInSession = sessionStorage.getItem('loggedInUser');
    const currentUserInSessionEmail =
      sessionStorage.getItem('loggedInUserEmail');
    if (currentUserInSession) {
      await this.setState({
        currentUser: {
          _id: currentUserInSession,
          email: currentUserInSessionEmail,
        },
      });

      // console.log(this.state.currentUser._id);
      this.handleCartCount();
    }
  }
  handleLogin = async (userId, email) => {
    sessionStorage.setItem('loggedInUser', userId);
    sessionStorage.setItem('loggedInUserEmail', email);
    toast.success(`You are now logged in as ${email}`);
    await this.setState({ currentUser: { _id: userId, email: email } });
    this.handleCartCount();
  };

  handleCartCount = async (id = this.state.currentUser._id) => {
    // nustatyti state cartCount i tiek kiek turim karte itemu

    const response = await getCartCount(id);
    this.state && this.setState({ cartCount: response });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('app updated');
  }
  selectCategory = async (cat) => {
    console.log('you have selected', cat);
    // panaudojam kat pavadinima kad parsiusiti veitoj visu items tik tos kategorijos items
    const result = await getItemsByCategory(cat);
    console.log(result);
    const shopCopy = { ...this.state.shop };
    shopCopy.items = result;
    this.setState({ shop: shopCopy });
  };

  render() {
    const { navLinks, shop, currentUser, cartCount } = this.state;
    return (
      <div className="App">
        <ToastContainer />
        <HeaderX currentUser={currentUser} navLinks={navLinks} />
        <div className="container">
          <Switch>
            <Route
              path="/shop"
              render={(props) => (
                <Shop
                  onSelectCategory={this.selectCategory}
                  onCartCount={this.handleCartCount}
                  cartCount={cartCount}
                  onLogin={this.handleLogin}
                  shop={shop}
                  {...props}
                />
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
