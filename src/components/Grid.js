import React from "react";
import classNames from "classnames";


const Grid = React.createClass({
  render() {
    let classes = {
      "slds-grid": this.props.base ? true : false,
      "slds-grid--frame": this.props.frame ? true : false,
      "slds-grid--align-center": this.props.center ? true : false,
      "slds-grid--align-spread": this.props.spread ? true : false,
      "slds-grid--align-space": this.props.alignSpace ? true : false
    };
    return (
      <div
        {...this.props}
        className={classNames(this.props.className, classes)}>
        {this.props.children}
      </div>
    );
  }
});

export default Grid;

