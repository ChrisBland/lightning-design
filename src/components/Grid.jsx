import React from "react";
import classNames from "classnames";


const Grid = React.createClass({
  render() {
    console.log(this.props);
    let classes = {
      "slds-grid": this.props.base ? true : false,
      "slds-grid--frame": this.props.frame ? true : false,
      "slds-grid--align-center": this.props.center ? true : false
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

