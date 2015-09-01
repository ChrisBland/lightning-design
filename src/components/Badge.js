import React from "react";
import classNames from "classnames";


const Badge = React.createClass({
  render() {
    let classes = {
      "slds-badge": true,
      "slds-theme--default": this.props.theme && this.props.theme === 'default' ? true : false,
      "slds-theme--shade": this.props.theme && this.props.theme === 'shade' ? true : false,
      "slds-theme--inverse": this.props.theme && this.props.theme === 'inverse' ? true : false,
    };
    return (
      <span
        {...this.props}
        className={classNames(this.props.className, classes)}>
        {this.props.children}
      </span>
    );
  }
});

export default Badge;
