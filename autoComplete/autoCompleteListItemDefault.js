'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _utils = require('../_utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AutoCompleteListItemDefault = function AutoCompleteListItemDefault(_ref) {
    var item = _ref.item;
    return _react2.default.createElement(
        'div',
        null,
        item.title && _react2.default.createElement(
            'div',
            { className: (0, _classcat2.default)((0, _utils2.default)({ 'autoComplete-primaryText': true })) },
            item.title
        ),
        item.description && _react2.default.createElement(
            'div',
            { className: (0, _classcat2.default)((0, _utils2.default)({ 'autoComplete-secondaryText': true })) },
            item.description
        )
    );
};
exports.default = AutoCompleteListItemDefault;
//# sourceMappingURL=autoCompleteListItemDefault.jsx.map