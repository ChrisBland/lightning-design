import React from "react";
import classNames from "classnames";

const Icon = React.createClass({
  render() {
    let classes = {};
    var useTag = "<use xlink:href='"+this.props.href+"'></use>";
    return (
      <span  {...this.props} className={classNames(this.props.className, classes)}>
        <svg aria-hidden="true" className={this.props.svgClasses} dangerouslySetInnerHTML={{__html: useTag }}> 
        </svg>
        <span className="slds-assistive-text">Announcement Icon</span>
      </span>
    );
  }
});

export default Icon;
