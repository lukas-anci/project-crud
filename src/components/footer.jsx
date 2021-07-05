import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './common/button/button';
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="container">
        <div className="hr"></div>
        <div className="footer-container d-flex">
          <div className="footer-links w-50">
            <h4 className="footer__title">Links</h4>
            <nav>
              {this.props.navLinks.map(({ to, title }) => (
                <Link className="footer__nav-link d-block" to={to}>
                  {title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="footer-about">
            <h4 className="footer__title">Be in the know</h4>
            <label htmlFor="email">
              Promotions, new products and sales. Directly to your inbox.
            </label>
            <div className="footer__input-group">
              <input type="email" placeholder="Your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="hr"></div>
        <div className="footer-bottom d-flex space-between">
          <div className="footer__copy">
            Copyright © 2021, Simple. Powered by Shopify
          </div>
          <div className="footer__cards">Cards</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
