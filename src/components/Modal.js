import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BaseButton from "./BaseButton";

import { modalInit, openModal } from 'modal-pattern/src/modal';

class Modal extends React.Component {
  constructor() {
    super();
    this._handleLoad = this._handleLoad.bind(this);
  }

  componentDidMount() {
    console.log("hello");
    this._handleLoad();
  }

  _handleLoad() {
    modalInit();
  }

  render() {
    return (
      <div className="modal-pattern-wrapper">
        <div className="modal-content-wrapper">
          <div className="modal-pattern" data-analytics-location="modal-TESTEXTENSION" id="example-modal-one">
            <div className="modal-container">
              <div aria-labelledby="modal-header-TESTEXTENSION" className="modal-inner" role="dialog" data-sg-column="8">
                <button aria-label="Close" className="-close--small" data-dismiss="x-close"></button>
                <div className="modal-header -left">
                  <i aria-hidden="true" className="icon-none -icon-notification"></i>
                  <p className="modal-title" id="modal-header-TESTEXTENSION">{this.props.modalTitle}</p>
                </div>
                <div className="modal-content">
                  <div className="modal-content-body" data-content-path="/content/kporg/en/national/content-fragments/documents/paperless/13.html">
                    <div className="content-fragment-container" data-analytics-location="content-fragment">
                      <div className="content-fragment" data-analytics-location="content-fragment-main-area">
                        {this.props.children}
                      </div>
                    </div>
                  </div>
                  <div className="modal-actions">
                    <div className="modal-buttons -right">
                      {this.props.buttons.map(button => <BaseButton key={button.id} button={button} />)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-fade-screen"></div>
            </div>
          </div>
        </div>
        <BaseButton button={{children:"hello, I'm a modal", dataModalTrigger: "example-modal-one", customClass: "modal-button" }} />
      </div>
    );
  }
  

  

}

// Modal.displayName = 'Modal';
// Modal.propTypes = {
//   //onClick: PropTypes.func
// };
// Modal.defaultProps = {
//   // onClick: () => {},
// };
export default Modal;
