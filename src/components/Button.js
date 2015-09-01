import React from "react";
import classNames from "classnames";


const Button = React.createClass({
  render() {
    let classes = {
      "slds-button": true,
      "slds-button--neutral": this.props.neutral ? true : false,
      "slds-button--small": this.props.small ? true : false,
      "slds-button--brand": this.props.brand ? true : false,
      "slds-button--inverse": this.props.inverse ? true : false,
    };
    return (
      <button
        {...this.props}
        className={classNames(this.props.className, classes)}>
        {this.props.text}
      </button>
    );
  }
});

export default Button;
