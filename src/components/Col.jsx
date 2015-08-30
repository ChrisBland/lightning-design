import React from "react";
import classNames from "classnames";


const Col = React.createClass({
  render() {
    let classes = {
      "slds-col": this.props.padded ? false : true,
      "slds-has-flexi-truncate": this.props.flexiTruncate ? true : false,
      "slds-col--padded": this.props.padded ? true : false
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

export default Col;
