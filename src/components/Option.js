import React from "react";
import classNames from "classnames";
import Grid from "./Grid";
import Col from "./Col";
import Icon from "./Icon";

const Option = React.createClass({
  handleClick: function(evt){
    this.props.changeEvt({label: this.props.label, value: this.props.value});
    this.props.toggleOpen();
  },
  icon: function(){
    if((this.props.value === this.props.selectedValue)){
      return (
        <Icon svgClasses="slds-icon slds-icon--small slds-icon--left" href="/assets/icons/standard-sprite/svg/symbols.svg#task2"/>
      ); 
    }
  },
  render: function(){
    let classes = {
      "slds-dropdown__item": true,
      "slds-has-icon--left": true,
      "slds-is-selected": (this.props.value === this.props.selectedValue) ? true : false
    };
    return (
      <div {...this.props} className={classNames(this.props.className, classes)}>
        <li role="menuitem option" onClick={this.handleClick} className={classNames(this.props.className, classes)}>
          <a className="slds-truncate">{this.icon()}{this.props.label}</a>
        </li>
      </div>
    );
  }
});

export default Option;
