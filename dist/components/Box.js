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

var Box = _react2["default"].createClass({
  displayName: "Box",

  render: function render() {
    var classes = {
      "slds-box": true,
      "slds-box--small": this.props.small ? true : false,
      "slds-box--x-small": this.props.xsmall ? true : false,
      "slds-theme--default": this.props.theme && this.props.theme === 'default' ? true : false,
      "slds-theme--shade": this.props.theme && this.props.theme === 'shade' ? true : false,
      "slds-theme--inverse": this.props.theme && this.props.theme === 'inverse' ? true : false,
      "slds-theme--alt-inverse": this.props.theme && this.props.theme === 'alt-inverse' ? true : false,
      "slds-theme--success": this.props.theme && this.props.theme === 'success' ? true : false,
      "slds-theme--inverse-text": this.props.theme && this.props.theme === 'success' ? true : false,
      "slds-theme--warning": this.props.theme && this.props.theme === 'warning' ? true : false,
      "slds-theme--error": this.props.theme && this.props.theme === 'danger' ? true : false,
      "slds-theme--offline": this.props.theme && this.props.theme === 'offline' ? true : false
    };

    return _react2["default"].createElement(
      "div",
      _extends({}, this.props, {
        className: (0, _classnames2["default"])(this.props.className, classes) }),
      this.props.children
    );
  }
});

exports["default"] = Box;
module.exports = exports["default"];