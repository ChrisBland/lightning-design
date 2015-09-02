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

var Text = _react2["default"].createClass({
  displayName: "Text",

  render: function render() {
    var classes = {
      "slds-text-body--regular": this.props.base ? true : false,
      "slds-text-body--small": this.props.small ? true : false,
      "slds-text-heading--large": this.props.heading && this.props.heading === 'large' ? true : false,
      "slds-text-heading--medium": this.props.heading && this.props.heading === 'medium' ? true : false,
      "slds-text-heading--small": this.props.heading && this.props.heading === 'small' ? true : false,
      "slds-text-heading--label": this.props.heading && this.props.heading === 'label' ? true : false
    };
    return _react2["default"].createElement(
      "div",
      _extends({}, this.props, {
        className: (0, _classnames2["default"])(this.props.className, classes) }),
      this.props.children
    );
  }
});

exports["default"] = Text;
module.exports = exports["default"];