import React, { Component } from 'react';
import css from './btn.module.css';
class Button extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <button className={this.props.outline ? css.button_outline : css.button}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
