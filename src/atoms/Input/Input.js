import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const inputProps = {
  type: PropTypes.oneOf(['text', 'email', 'password']),
  size: PropTypes.oneOf(['sm', 'md']),
  className: PropTypes.string
};

const defaultInputProps = {
  size: 'md'
}

export class Input extends Component {

  getPlaceholder = () => {
    const { type } = this.props;

    switch ( type ) {
      case 'email':
        return 'example@domain.edu';
      default:
        return '';
    }
  }

  render() {
    const { className, size, placeholder, ...props } = this.props;

    return (
      <input className={`Input ${ size } ${ true && className }`}
             placeholder={ placeholder || this.getPlaceholder() }
             { ...props } />
    )
  }
}

Input.propTypes = inputProps;
Input.defaultProps = defaultInputProps;
