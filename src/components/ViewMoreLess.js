import React, { Component } from 'react';
import viewMoreViewLessTextInit from 'view-more-less-text-pattern/src/view-more-less-text';

class ViewMoreLess extends React.Component {
  constructor() {
    super();
    this._handleLoad = this._handleLoad.bind(this);
  }

  componentDidMount() {
    this._handleLoad();
  }

  _handleLoad() {
    viewMoreViewLessTextInit();
  }

  render() {
    return (
      <p className={"view-more-less-text " + this.props.customClass} 
        data-analytics-location="View More/Less Text"
        data-max-lines={this.props.dataMax}
        data-max-lines-mobile={this.props.dataMaxMobile}
        data-more-label={this.props.dataMore}
        data-less-label={this.props.dataLess}
        data-description={this.props.dataDescription}>
        {this.props.children}
      </p>
    ); 
  }

}

export default ViewMoreLess;