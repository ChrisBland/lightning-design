import React from "react";
import classNames from "classnames";


const Col = React.createClass({
  render() {
    let classes = {
      "slds-col": true,
      "slds-has-flexi-truncate": this.props.flexiTruncate ? true : false
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
