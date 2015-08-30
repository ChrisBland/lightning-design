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

var _GridJsx = require("./Grid.jsx");

var _GridJsx2 = _interopRequireDefault(_GridJsx);

var _ColJsx = require("./Col.jsx");

var _ColJsx2 = _interopRequireDefault(_ColJsx);

var _IconJsx = require("./Icon.jsx");

var _IconJsx2 = _interopRequireDefault(_IconJsx);

var PageHeader = _react2["default"].createClass({
  displayName: "PageHeader",

  render: function render() {
    var classes = {
      "slds-page-header": true
    };
    return _react2["default"].createElement(
      "div",
      _extends({}, this.props, { className: (0, _classnames2["default"])(this.props.className, classes) }),
      _react2["default"].createElement(
        _GridJsx2["default"],
        null,
        _react2["default"].createElement(
          _ColJsx2["default"],
          { flexiTruncate: true },
          _react2["default"].createElement(
            "p",
            { className: "slds-text-heading--label" },
            this.props.heading
          ),
          _react2["default"].createElement(
            _GridJsx2["default"],
            null,
            _react2["default"].createElement(
              "div",
              { className: "slds-grid slds-type-focus slds-no-space" },
              _react2["default"].createElement(
                "h1",
                { className: "slds-text-heading--medium slds-truncate", title: "{this.props.title}" },
                this.props.title
              ),
              _react2["default"].createElement(
                "button",
                { className: "slds-button slds-button--icon-bare slds-shrink-none slds-align-middle slds-m-left--x-small" },
                _react2["default"].createElement(_IconJsx2["default"], { svgClasses: "slds-button__icon slds-button__icon--x-small", href: "/assets/icons/utility-sprite/svg/symbols.svg#down" }),
                _react2["default"].createElement(
                  "span",
                  { className: "slds-assistive-text" },
                  "View More"
                )
              )
            )
          )
        )
      )
    );
  }
});

exports["default"] = PageHeader;
module.exports = exports["default"];