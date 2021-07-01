import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HeaderX extends Component {
  render() {
    return (
      <header className="header">
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
        </div>
      </header>
    );
  }
}

export default HeaderX;
