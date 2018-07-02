import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const inputProps = {
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  size: PropTypes.oneOf(['sm', 'md']),
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};

const defaultInputProps = {
  value: '',
  size: 'md',
  className: ''
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
    const { className, size, name, placeholder, value, required, ...props } = this.props;

    return (
      <input className={`Atom-Input ${ size } ${ className }`}
             name={ name }
             defaultValue={ value }
             placeholder={ placeholder || this.getPlaceholder() }
             required={ required }
             { ...props } />
    )
  }
}

Input.propTypes = inputProps;
Input.defaultProps = defaultInputProps;
