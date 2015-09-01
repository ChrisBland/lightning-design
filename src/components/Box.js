import React from "react";
import classNames from "classnames";


const Box = React.createClass({
  render() {
    let classes = {
      "slds-box": true,
      "slds-box--small": this.props.small ? true : false,
      "slds-box--x-small": this.props.xsmall ? true : false
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

export default Box;
