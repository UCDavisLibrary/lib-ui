import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Select.css';

const selectProps = {
  options: PropTypes.arrayOf( PropTypes.shape({
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    text: PropTypes.string
  }) ).isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};

const defaultSelectProps = {
  value: '',
  size: 'md',
  className: ''
}

export class Select extends Component {
  renderOptions = () => {
    const { name, options } = this.props;

    return options.map( ( option, i ) => (
      <option value={ option.value }
              key={`${ name }-${ option.value }-${ i }`}>
        { option.text }
      </option>
    ));
  }

  render() {
    const { name, size, required, className, value, onChange, ...props } = this.props;

    return (
      <div className={ `Select ${ size } ${ !value && 'unselected' } ${ required && 'required' } ${ className }` }>
        <select name={ name }
                value={ value }
                onChange={ onChange }
                required={ required }
                { ...props }>
          { this.renderOptions() }
        </select>
      </div>
    )
  }
}

Select.propTypes = selectProps;
Select.defaultProps = defaultSelectProps;
