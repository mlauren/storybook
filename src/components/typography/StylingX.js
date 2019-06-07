import React, { Component } from 'react';

class StylingX extends React.Component {
  render() {

    return (
      <p className={this.props.customClass + " " + this.props.stylingX}>{this.props.children}</p>
    );
  }
}

export default StylingX;