import React from "react";
import classNames from "classnames";


const Grid = React.createClass({
  render() {
    console.log(this.props);
    let classes = {
      "slds-grid": Object.keys(this.props).length === 1 ? true : false,
      "slds-grid--frame": this.props.frame ? true : false
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

