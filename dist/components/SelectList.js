"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _Grid = require("./Grid");

var _Grid2 = _interopRequireDefault(_Grid);

var _Col = require("./Col");

var _Col2 = _interopRequireDefault(_Col);

var _Icon = require("./Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _Option = require("./Option");

var _Option2 = _interopRequireDefault(_Option);

var SelectList = _react2["default"].createClass({
  displayName: "SelectList",

  getInitialState: function getInitialState() {
    return {
      open: false,
      filter: ''
    };
  },
  toggleText: function toggleText(evt) {
    console.log(evt.target.value);
    this.setState({
      filter: evt.target.value
    });
  },
  search: function search() {
    if (this.props.filterable) {
      return _react2["default"].createElement(
        "div",
        { className: "slds-dropdown__header" },
        _react2["default"].createElement(
          "div",
          { placeholder: "Find in list...", className: "slds-input-has-icon slds-input-has-icon--left slds-m-bottom--x-small" },
          _react2["default"].createElement(_Icon2["default"], { svgClasses: "slds-input__icon", href: "/assets/icons/utility-sprite/svg/symbols.svg#search" }),
          _react2["default"].createElement(
            "label",
            { className: "slds-assistive-text", "for": "input__filter" },
            "Find in list..."
          ),
          _react2["default"].createElement("input", { onChange: this.toggleText, id: "input__filter", className: "slds-input", type: "text", placeholder: "Find in list..." })
        ),
        _react2["default"].createElement(
          "span",
          { className: "slds-text-heading--label" },
          "Lists"
        )
      );
    }
  },
  options: function options() {
    var _this = this;

    if (this.state.open === true) {
      var opts = this.props.options.filter(function (item) {
        if (_this.state.filter === '') return true;
        return item.label.indexOf(_this.state.filter) > -1;
      }).map(function (item) {
        return _react2["default"].createElement(_Option2["default"], { selectedValue: _this.props.value, key: item.value, toggleOpen: _this.toggleOpen, value: item.value, label: item.label, changeEvt: _this.props.changeEvt });
      });
      return _react2["default"].createElement(
        "div",
        { className: "slds-dropdown slds-dropdown--left slds-dropdown--small slds-dropdown--menu " },
        this.search(),
        _react2["default"].createElement(
          "ul",
          { className: "slds-dropdown__list slds-scrollable--y", role: "menu", style: { maxHeight: '150px' } },
          opts
        )
      );
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        open: false,
        filter: ''
      });
    }
  },
  toggleOpen: function toggleOpen() {
    this.setState({
      open: !this.state.open,
      filter: ''
    });
  },
  render: function render() {
    var classes = {
      "slds-form-element": true
    };
    var text = this.props.value && this.props.value !== '' ? this.props.value : 'Select an Option';
    return _react2["default"].createElement(
      "div",
      _extends({}, this.props, { className: (0, _classnames2["default"])(this.props.className, classes) }),
      _react2["default"].createElement(
        "div",
        { "aria-expanded": "true", className: "slds-picklist" },
        _react2["default"].createElement(
          "button",
          { className: "slds-button slds-button--neutral slds-picklist__label", "aria-haspopup": "true", onClick: this.toggleOpen },
          _react2["default"].createElement(
            "span",
            { className: "slds-truncate" },
            text
          ),
          _react2["default"].createElement(_Icon2["default"], { svgClasses: "slds-icon", href: "/assets/icons/utility-sprite/svg/symbols.svg#down" })
        ),
        this.options()
      )
    );
  }
});

exports["default"] = SelectList;
module.exports = exports["default"];