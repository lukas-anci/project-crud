import React, { Component } from 'react';
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="container">
        <div className="hr"></div>
        <div className="footer-container d-flex">
          <div className="footer-links w-50">
            <a href="/">Search</a> <br />
            <a href="/">Our story</a>
            <br />
            <a href="/">News</a>
            <br />
            <a href="/">Contact Us</a>
            <br />
          </div>
          <div className="footer-about">
            <h4>Be in the know</h4>
            <label htmlFor="email">
              Promotions, new products and sales. Directly to your inbox.
            </label>
            <input type="email" />
            <button>subscribe</button>
          </div>
        </div>
        <div className="hr"></div>
        <div className="copyright">2021 All rights reserved</div>
      </footer>
    );
  }
}

export default Footer;
