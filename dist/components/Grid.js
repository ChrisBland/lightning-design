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

var Grid = _react2["default"].createClass({
  displayName: "Grid",

  render: function render() {
    var classes = {
      "slds-grid": this.props.base ? true : false,
      "slds-grid--frame": this.props.frame ? true : false,
      "slds-grid--align-center": this.props.center ? true : false,
      "slds-grid--align-spread": this.props.spread ? true : false,
      "slds-grid--align-space": this.props.alignSpace ? true : false
    };
    return _react2["default"].createElement(
      "div",
      _extends({}, this.props, {
        className: (0, _classnames2["default"])(this.props.className, classes) }),
      this.props.children
    );
  }
});

exports["default"] = Grid;
module.exports = exports["default"];