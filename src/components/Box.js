import React from "react";
import classNames from "classnames";


const Box = React.createClass({
  render() {
    let classes = {
      "slds-box": true,
      "slds-box--small": this.props.small ? true : false,
      "slds-box--x-small": this.props.xsmall ? true : false,
      "slds-theme--default": this.props.theme && this.props.theme === 'default' ? true : false,
      "slds-theme--shade": this.props.theme && this.props.theme === 'shade' ? true : false,
      "slds-theme--inverse": this.props.theme && this.props.theme === 'inverse' ? true : false,
      "slds-theme--alt-inverse": this.props.theme && this.props.theme === 'alt-inverse' ? true : false,
      "slds-theme--success": this.props.theme && this.props.theme === 'success' ? true : false,
      "slds-theme--inverse-text": this.props.theme && this.props.theme === 'success' ? true : false,
      "slds-theme--warning": this.props.theme && this.props.theme === 'warning' ? true : false,
      "slds-theme--error": this.props.theme && this.props.theme === 'danger' ? true : false,
      "slds-theme--offline": this.props.theme && this.props.theme === 'offline' ? true : false
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
