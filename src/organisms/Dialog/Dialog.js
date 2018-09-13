import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import './Dialog.css';

import * as Atoms from '../../atoms';
import * as Molecules from '../../molecules';

const dialogProps = {
  title: PropTypes.string.isRequired,
  submitText: PropTypes.string,
  cancelText: PropTypes.string,
  dismissOnBackdropClick: PropTypes.bool,
  show: PropTypes.bool,
  dismiss: PropTypes.func,
  submit: PropTypes.func,
  children: PropTypes.element
};

const defaultProps = {
  submitText: "Submit",
  cancelText: "Cancel",
  dismissOnBackdropClick: false,
  show: false
};

export class Dialog extends Component {

  constructor( props ) {
    super( props );
  }

  hideOverflow = () => {
    const body = document.querySelector( 'body' );
    body.classList.add( 'overflow-hidden' );
  }
  showOverflow = () => {
    const body = document.querySelector( 'body' );
    body.classList.remove( 'overflow-hidden' );
  }

  dismiss = () => {
    const { dismiss } = this.props;

    this.showOverflow();
    dismiss();
  }
  submit = () => {
    const { submit } = this.props;

    this.showOverflow();
    submit();
  }

  renderDialog = ( transitionState ) => {
    const { show, dismissOnBackdropClick, title, submitText, cancelText, children } = this.props;

    this.hideOverflow();

    return (
      <div className="dialogContainer">
        <CSSTransition in={ transitionState === 'entered' }
                       timeout={ 200 }
                       classNames="dialog"
                       unmountOnExit
                       onExited={() => {}}>
          <div className="dialog">
            <div className="title">
              This is a dialog
            </div>
            <div className="content">
              { children }
            </div>
            <div className="actions">
              <Atoms.Button onClick={ this.dismiss } size="sm" type="ghost">
                { cancelText }
              </Atoms.Button>
              <Atoms.Button onClick={ this.submit } size="sm" type="primary">
                { submitText }
              </Atoms.Button>
            </div>
          </div>
        </CSSTransition>

        <div className="backdrop" onClick={ dismissOnBackdropClick ? this.dismiss : () => {} } />
      </div>
    )
  }

  render() {
    const { show } = this.props;

    return (
      <div className="Dialog">
        <CSSTransition in={ show }
                       timeout={ 100 }
                       classNames="backdrop"
                       unmountOnExit
                       onExited={() => {}}>
          { transitionState => this.renderDialog( transitionState ) }
        </CSSTransition>
      </div>
    )
  }
}

Dialog.propTypes = dialogProps;
Dialog.defaultProps = defaultProps;
