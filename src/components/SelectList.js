import React from "react";
import classNames from "classnames";
import Grid from "./Grid";
import Col from "./Col";
import Icon from "./Icon";
import Option from "./Option";

const SelectList = React.createClass({
  getInitialState: function(){
    return {
      open: false,
      filter: ''
    };
  },
  toggleText: function(evt){
    console.log(evt.target.value);
    this.setState({
      filter: evt.target.value
    });
  },
  search: function(){
    if(this.props.filterable){
      return (
        <div className="slds-dropdown__header">
          <div placeholder="Find in list..." className="slds-input-has-icon slds-input-has-icon--left slds-m-bottom--x-small">
            <Icon svgClasses="slds-input__icon" href="/assets/icons/utility-sprite/svg/symbols.svg#search"/>
            <label className="slds-assistive-text" for="input__filter">Find in list...</label>
            <input onChange={this.toggleText} id="input__filter" className="slds-input" type="text" placeholder="Find in list..." />
          </div>
          <span className="slds-text-heading--label">Lists</span>
        </div>
      );
    }
  },
  options: function(){
    if(this.state.open === true){
      var opts =  this.props.options.filter((item)=>{
        if(this.state.filter === '') return true;
        return (item.label.indexOf(this.state.filter) > -1);
      }).map((item)=>{
        return <Option selectedValue={this.props.value} key={item.value} toggleOpen={this.toggleOpen} value={item.value} label={item.label} changeEvt={this.props.changeEvt}/>;
      });
      return (
        <div className="slds-dropdown slds-dropdown--left slds-dropdown--small slds-dropdown--menu " >
          {this.search()}
          <ul className="slds-dropdown__list slds-scrollable--y" role="menu" style={{maxHeight: '150px'}}>
           {opts}
          </ul>
        </div>
      );
    }
  },
  componentWillReceiveProps: function(nextProps) {
    if(this.props.value !== nextProps.value){
      this.setState({
        open: false,
        filter: ''
      });
    }
  },
  toggleOpen: function(){
    this.setState({
      open: !this.state.open,
      filter: ''
    });
  },
  render: function(){
    let classes = {
      "slds-form-element": true
    };
    let text = (this.props.value && this.props.value !== '') ? this.props.value : 'Select an Option';
    return (
      <div {...this.props} className={classNames(this.props.className, classes)}>
        <div aria-expanded="true" className="slds-picklist">
          <button className="slds-button slds-button--neutral slds-picklist__label" aria-haspopup="true" onClick={this.toggleOpen}>
            <span className="slds-truncate">{text}</span>
            <Icon svgClasses="slds-icon" href="/assets/icons/utility-sprite/svg/symbols.svg#down"/>
          </button>
          {this.options()}
        </div>
      </div>
    );
  }
});

export default SelectList;
