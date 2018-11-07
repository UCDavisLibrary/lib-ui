import React, { Component } from 'react';
import './Input.css';
import PropTypes from 'prop-types';

import MaskedInput from 'react-text-mask';

const inputProps = {
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'tel']),
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
      case 'tel':
        return '(###) ###-####';
      default:
        return '';
    }
  }

  handleChange = ( e ) => {
    const { onChange } = this.props;

    if( onChange ) {
      onChange( e );
    }

    this.setState({ value: e.target.value });
  }

  renderDefaultInput = () => {
    const { className, type, size, name, placeholder, value, onChange, required, autocomplete } = this.props;

    return (
      <input className={`Atom-Input ${ size } ${ className }`}
             type={ type }
             name={ name }
             value={ this.state.value }
             placeholder={ placeholder || this.getPlaceholder() }
             autoComplete={ autocomplete }
             required={ required }
             onChange={ this.handleChange } />
    )
  }

  renderInputWithMask = ( mask ) => {
    const { className, type, size, name, placeholder, value, onChange, required, autocomplete } = this.props;

    return (
      <MaskedInput mask={[ '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/ ]}
                   guide={ true }
                   className={`Atom-Input ${ size } ${ className }`}
                   type={ type }
                   name={ name }
                   value={ this.state.value }
                   placeholder={ placeholder || this.getPlaceholder() }
                   autoComplete={ autocomplete }
                   required={ required }
                   onChange={ this.handleChange } />
    )
  }

  render() {
    const { type } = this.props;

    switch ( type ) {
      case 'tel':
        return this.renderInputWithMask( '(999) 999-9999' );
      default:
        return this.renderDefaultInput();
    }
  }
}

Input.propTypes = inputProps;
Input.defaultProps = defaultInputProps;
