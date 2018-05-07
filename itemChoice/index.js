'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _utils = require('../_utils');

var _utils2 = _interopRequireDefault(_utils);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _chevronIcon = require('../icon/chevronIcon');

var _chevronIcon2 = _interopRequireDefault(_chevronIcon);

var _loader = require('../loader');

var _loader2 = _interopRequireDefault(_loader);

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemChoice = function (_PureComponent) {
    _inherits(ItemChoice, _PureComponent);

    function ItemChoice() {
        _classCallCheck(this, ItemChoice);

        return _possibleConstructorReturn(this, (ItemChoice.__proto__ || Object.getPrototypeOf(ItemChoice)).apply(this, arguments));
    }

    _createClass(ItemChoice, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                _props$loading = _props.loading,
                loading = _props$loading === undefined ? false : _props$loading,
                _props$highlighted = _props.highlighted,
                highlighted = _props$highlighted === undefined ? false : _props$highlighted,
                _props$selected = _props.selected,
                selected = _props$selected === undefined ? false : _props$selected,
                _props$valid = _props.valid,
                valid = _props$valid === undefined ? false : _props$valid,
                onClick = _props.onClick,
                onBlur = _props.onBlur,
                onFocus = _props.onFocus,
                onMouseDown = _props.onMouseDown,
                _props$href = _props.href,
                href = _props$href === undefined ? '' : _props$href,
                label = _props.label,
                subLabel = _props.subLabel,
                leftAddon = _props.leftAddon,
                rightAddon = _props.rightAddon,
                validated = _props.validated,
                key = _props.key;

            var classNames = (0, _classcat2.default)([(0, _utils2.default)({
                itemChoice: true,
                'itemChoice--highlighted': highlighted,
                'itemChoice--withSubLabel': !!subLabel
            }), className]);
            var rightIcon = _react2.default.createElement(_chevronIcon2.default, { className: (0, _classcat2.default)((0, _utils2.default)({ chevron: true })) });
            if (loading) {
                rightIcon = _react2.default.createElement(_loader2.default, { className: (0, _classcat2.default)((0, _utils2.default)({ chevron: true })), size: 24, inline: true });
            }
            if (valid) {
                rightIcon = _react2.default.createElement(_button2.default, { className: (0, _classcat2.default)((0, _utils2.default)({ 'itemChoice-checkmark': true })), valid: true, validated: validated });
            }
            var Component = void 0;
            var typeProps = void 0;
            // If we pass a component to href, we get component type and we merge props
            if (typeof href !== 'string') {
                Component = href.type;
                typeProps = Object.assign({}, href.props, { onClick: onClick,
                    onFocus: onFocus,
                    onBlur: onBlur,
                    onMouseDown: onMouseDown, className: (0, _classcat2.default)([href.props.className, classNames]) });
            } else if (href.length > 0) {
                Component = 'a';
                typeProps = { onClick: onClick, onFocus: onFocus, onBlur: onBlur, onMouseDown: onMouseDown, href: href, className: classNames };
            } else {
                Component = 'li';
                typeProps = { onClick: onClick, onFocus: onFocus, onBlur: onBlur, onMouseDown: onMouseDown, className: classNames };
            }
            return _react2.default.createElement(
                Component,
                _extends({ role: 'option', key: key, 'aria-selected': selected }, typeProps),
                leftAddon && _react2.default.createElement(
                    'div',
                    {
                        className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)((0, _utils2.default)({ 'itemChoice-leftAddon': true })) || '')
                    },
                    leftAddon
                ),
                label && _react2.default.createElement(
                    'div',
                    {
                        className: 'jsx-' + _style4.default.__scopedHash
                    },
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)((0, _utils2.default)({ 'itemChoice-label': true })) || '')
                        },
                        label
                    ),
                    subLabel && _react2.default.createElement(
                        'div',
                        {
                            className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)((0, _utils2.default)({ 'itemChoice-subLabel': true })) || '')
                        },
                        subLabel
                    )
                ),
                children,
                rightAddon && _react2.default.createElement(
                    'div',
                    {
                        className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)((0, _utils2.default)({ 'itemChoice-rightAddon': true })) || '')
                    },
                    rightAddon
                ),
                rightIcon,
                _react2.default.createElement(_style2.default, {
                    styleId: _style4.default.__scopedHash,
                    css: _style4.default.__scoped
                })
            );
        }
    }]);

    return ItemChoice;
}(_react.PureComponent);

exports.default = ItemChoice;
//# sourceMappingURL=index.jsx.map