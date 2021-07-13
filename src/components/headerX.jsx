import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderX extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      menuHeight: null,
    };
    // sukuriam nuoroda i el pan kaip su getElById
    this.mainNavRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.mainNavRef.current.scrollHeight);

    this.setState({
      menuHeight: this.state.showNav ? this.mainNavRef.current.scrollHeight : 0,
    });
  }

  toggleBurger = () => {
    const currentStateNav = this.state.showNav;
    this.setState({
      showNav: !currentStateNav,
      menuHeight: !this.state.showNav
        ? this.mainNavRef.current.scrollHeight
        : 0,
    });
  };

  render() {
    return (
      <header className="header mb-1">
        <div className="container d-flex space-between">
          <Link to="/" className="logo">
            My
            <strong>ShopX</strong>
          </Link>
          <nav
            style={{ minHeight: this.state.menuHeight }}
            ref={this.mainNavRef}
            className={`main-nav ${this.state.showNav ? 'open' : ''} `}
          >
            {this.props.navLinks.map((n) => {
              return (
                <Link key={n.title} className="nav-link-item" to={n.to}>
                  {n.title}
                </Link>
              );
            })}
          </nav>
          <button onClick={this.toggleBurger} className="mobile-burger">
            <i className="mobile-burger__icon fa fa-bars"></i>
          </button>
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
