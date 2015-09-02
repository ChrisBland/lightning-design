import React from "react";
import classNames from "classnames";


const Text = React.createClass({
  render() {
    let classes = {
      "slds-text-body--regular": this.props.base ? true : false,
      "slds-text-body--small": this.props.small ? true : false,
      "slds-text-heading--large": this.props.heading && this.props.heading === 'large' ? true : false,
      "slds-text-heading--medium": this.props.heading && this.props.heading === 'medium' ? true : false,
      "slds-text-heading--small": this.props.heading && this.props.heading === 'small' ? true : false,
      "slds-text-heading--label": this.props.heading && this.props.heading === 'label' ? true : false
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

export default Text;
