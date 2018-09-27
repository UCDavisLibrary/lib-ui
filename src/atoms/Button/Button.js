import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

import MDSpinner from 'react-md-spinner';
import { CSSTransition } from 'react-transition-group';

const buttonProps = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf([ 'primary', 'secondary', 'ghost', 'arrow' ]),
  size: PropTypes.oneOf([ 'sm', 'md' ]),
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
    e.stopPropagation();

    const { type, onClick } = this.props;
    const { loading } = this.state;

    if( !loading ) {
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
      <div className="children-wrapper spinner">
        <MDSpinner size={ size === 'sm' ? 17 : 19 }
                   color1="#FFF"
                   color2="#FFF"
                   color3="#FFF"
                   color4="#FFF" />
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
    const { onClick, variant, size, type, className } = this.props;

    return (
      <button className={ `Atom-Button ${ variant } ${ size } ${ className || '' } ${ this.state.loading ? 'loading' : '' }` }
              onClick={ this.handleClick }
              type={ type }>
        { this.renderChildren() }
        { this.renderLoader() }
      </button>
    )
  }
}

Button.propTypes = buttonProps;
Button.defaultProps = buttonDefaultProps;
