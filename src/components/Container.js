import React from "react";
import classNames from "classnames";

const Container = React.createClass({

  render() {
    let classes = {
      "slds-container--small": this.props.small ? true : false,
      "slds-container--medium": this.props.medium ? true : false,
      "slds-container--large": this.props.large ? true : false,
      "slds-container--fluid": this.props.fluid ? true : false,
      "slds-container--left": this.props.left ? true : false,
      "slds-container--right": this.props.right ? true : false,
      "slds-container--center": this.props.center ? true : false
    };
    return (
      <div {...this.props} className={classNames(this.props.className, classes)}>
        {this.props.children}
      </div>
    );
  }
});

export default Container;
