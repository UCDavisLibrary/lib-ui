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

  constructor( props ) {
    super( props );

    this.state = {
      value: props.value
    };
  }

  componentWillReceiveProps( nextProps ) {
    if( nextProps.value !== this.state.value ) {
      this.setState({ value: nextProps.value });
    }
  }

  getPlaceholder = () => {
    const { type } = this.props;

    switch ( type ) {
      case 'email':
        return 'example@domain.edu';
      default:
        return '';
    }
  }

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  }

  render() {
    const { className, size, name, placeholder, value, required, ...props } = this.props;

    return (
      <input className={`Atom-Input ${ size } ${ className }`}
             name={ name }
             value={ this.state.value }
             placeholder={ placeholder || this.getPlaceholder() }
             required={ required }
             onChange={ this.handleChange } />
    )
  }
}

Input.propTypes = inputProps;
Input.defaultProps = defaultInputProps;
