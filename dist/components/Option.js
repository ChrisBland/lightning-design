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

var Option = _react2["default"].createClass({
  displayName: "Option",

  handleClick: function handleClick(evt) {
    this.props.changeEvt({ label: this.props.label, value: this.props.value });
    this.props.toggleOpen();
  },
  icon: function icon() {
    if (this.props.value === this.props.selectedValue) {
      return _react2["default"].createElement(_Icon2["default"], { svgClasses: "slds-icon slds-icon--small slds-icon--left", href: "/assets/icons/standard-sprite/svg/symbols.svg#task2" });
    }
  },
  render: function render() {
    var classes = {
      "slds-dropdown__item": true,
      "slds-has-icon--left": true,
      "slds-is-selected": this.props.value === this.props.selectedValue ? true : false
    };
    return _react2["default"].createElement(
      "div",
      _extends({}, this.props, { className: (0, _classnames2["default"])(this.props.className, classes) }),
      _react2["default"].createElement(
        "li",
        { role: "menuitem option", onClick: this.handleClick, className: (0, _classnames2["default"])(this.props.className, classes) },
        _react2["default"].createElement(
          "a",
          { className: "slds-truncate" },
          this.icon(),
          this.props.label
        )
      )
    );
  }
});

exports["default"] = Option;
module.exports = exports["default"];