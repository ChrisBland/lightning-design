import React from "react";
import classNames from "classnames";

const Container = React.createClass({
  propTypes: {
    pullRight: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      pullRight: false
    };
  },

  render() {
    let classes = {
      "slds-grid--frame": this.props.frame ? true : false
    };
    return (
      <div
        {...this.props}
        className={classNames(this.props.className, classes)}>
        {this.props.children}
        test
      </div>
    );
  }
});

export default Container;
