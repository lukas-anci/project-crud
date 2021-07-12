import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HeaderX extends Component {
  render() {
    return (
      <header className="header mb-1">
        <div className="container d-flex space-between">
          <Link to="/" className="logo">
            My
            <strong>ShopX</strong>
          </Link>
          <nav className="main-nav">
            {this.props.navLinks.map((n) => {
              return (
                <Link key={n.title} className="nav-link-item" to={n.to}>
                  {n.title}
                </Link>
              );
            })}
          </nav>
          {this.props.currentUser._id && (
            <div className="logged-in">
              Logged in: {this.props.currentUser.email}
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default HeaderX;
