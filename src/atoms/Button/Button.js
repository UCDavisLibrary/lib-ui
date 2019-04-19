import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

import { Loader } from '../Loader';
import { CSSTransition } from 'react-transition-group';

const buttonProps = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf([ 'primary', 'secondary', 'ghost', 'arrow', 'destructive' ]),
  size: PropTypes.oneOf([ 'sm', 'md' ]),
  disabled: PropTypes.bool,
  className: PropTypes.string
};

const buttonDefaultProps = {
  onClick: () => {},
  variant: 'primary',
  size: 'md'
}

export class Button extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      loading: false
    }
  }

  handleClick = ( e ) => {
    e.preventDefault();
    // e.stopPropagation();

    const { type, onClick } = this.props;

    if( !this.state.loading ) {
      if( type === 'submit' ) {
        this.setState( { loading: true }, onClick );
      } else {
        onClick();
      }
    }
  }

  renderLoader = () => {
    const { size } = this.props;

    return (
      <div className="children-wrapper loader">
        <Loader variant="white" size="sm" />
      </div>
    )
  }

  renderChildren = () => {
    const { children, variant } = this.props;

    return (
      <div className="children-wrapper content">
        <div className="children">{ children }</div>
        { variant === 'arrow' && <span className="arrow">&rarr;</span> }
      </div>
    )
  }

  render() {
    const { onClick, variant, size, type, disabled, className } = this.props;

    return (
      <button className={ `Atom-Button ${ variant } ${ size } ${ className || '' } ${ this.state.loading ? 'loading' : '' }` }
              onClick={ this.handleClick }
              type={ type }
              disabled={ disabled }>
        { this.renderChildren() }
        { this.renderLoader() }
      </button>
    )
  }
}

Button.propTypes = buttonProps;
Button.defaultProps = buttonDefaultProps;
