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

var Spinner = _react2["default"].createClass({
  displayName: "Spinner",

  render: function render() {
    var classes = {
      'slds-spinner--large': this.props.large,
      'slds-spinner--small': this.props.small,
      'slds-spinner--medium': this.props.medium
    };
    var spinner = '/assets/images/spinners/slds_spinner.gif';
    if (this.props.brand) spinner = '/assets/images/spinners/slds_spinner_brand.gif';
    if (this.props.inverted) spinner = '/assets/images/spinners/slds_spinner_inverse.gif';
    var useTag = "<use xlink:href='" + spinner + "'></use>";
    return _react2["default"].createElement(
      "div",
      _extends({}, this.props, { className: (0, _classnames2["default"])(this.props.className, classes) }),
      _react2["default"].createElement("img", { src: spinner, alt: "Loading..." })
    );
  }
});

exports["default"] = Spinner;
module.exports = exports["default"];