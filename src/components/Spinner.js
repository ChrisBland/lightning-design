import React from "react";
import classNames from "classnames";

const Spinner = React.createClass({
  render() {
    let classes = {
      'slds-spinner--large': this.props.large,
      'slds-spinner--small': this.props.small,
      'slds-spinner--medium': this.props.medium
    };
    var spinner = '/assets/images/spinners/slds_spinner.gif';
    if(this.props.brand) spinner = '/assets/images/spinners/slds_spinner_brand.gif';
    if(this.props.inverted) spinner = '/assets/images/spinners/slds_spinner_inverse.gif'
    var useTag = "<use xlink:href='"+spinner+"'></use>";
    return (
      <div {...this.props} className={classNames(this.props.className, classes)}>
        <img src={spinner} alt="Loading..." />
      </div>
    );
  }
});

export default Spinner;
