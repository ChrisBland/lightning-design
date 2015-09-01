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

var Button = _react2["default"].createClass({
  displayName: "Button",

  render: function render() {
    var classes = {
      "slds-button": true,
      "slds-button--neutral": this.props.neutral ? true : false,
      "slds-button--small": this.props.small ? true : false,
      "slds-button--brand": this.props.brand ? true : false,
      "slds-button--inverse": this.props.inverse ? true : false
    };
    return _react2["default"].createElement(
      "button",
      _extends({}, this.props, {
        className: (0, _classnames2["default"])(this.props.className, classes) }),
      this.props.text
    );
  }
});

exports["default"] = Button;
module.exports = exports["default"];