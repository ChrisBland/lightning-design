'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsGridJs = require('./components/Grid.js');

var _componentsGridJs2 = _interopRequireDefault(_componentsGridJs);

var _componentsContainerJs = require('./components/Container.js');

var _componentsContainerJs2 = _interopRequireDefault(_componentsContainerJs);

var _componentsPageHeaderJs = require('./components/PageHeader.js');

var _componentsPageHeaderJs2 = _interopRequireDefault(_componentsPageHeaderJs);

var _componentsColJs = require('./components/Col.js');

var _componentsColJs2 = _interopRequireDefault(_componentsColJs);

var _componentsSpinnerJs = require('./components/Spinner.js');

var _componentsSpinnerJs2 = _interopRequireDefault(_componentsSpinnerJs);

var _componentsCardJs = require('./components/Card.js');

var _componentsCardJs2 = _interopRequireDefault(_componentsCardJs);

var _componentsButtonJs = require('./components/Button.js');

var _componentsButtonJs2 = _interopRequireDefault(_componentsButtonJs);

var _componentsBadgeJs = require('./components/Badge.js');

var _componentsBadgeJs2 = _interopRequireDefault(_componentsBadgeJs);

require("babel/register");

exports['default'] = {
  Grid: _componentsGridJs2['default'],
  Container: _componentsContainerJs2['default'],
  PageHeader: _componentsPageHeaderJs2['default'],
  Col: _componentsColJs2['default'],
  Spinner: _componentsSpinnerJs2['default'],
  Card: _componentsCardJs2['default'],
  Button: _componentsButtonJs2['default'],
  Badge: _componentsBadgeJs2['default']
};
module.exports = exports['default'];