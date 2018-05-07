'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eventHandler = undefined;

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

var _branding = require('../_utils/branding');

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

var _loader = require('../loader');

var _loader2 = _interopRequireDefault(_loader);

var _checkIcon = require('../icon/checkIcon');

var _checkIcon2 = _interopRequireDefault(_checkIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
var eventHandler = exports.eventHandler = function eventHandler(componentEvent, childEvent) {
    return function (event) {
        componentEvent && componentEvent(event);
        childEvent && childEvent(event);
    };
};

var Button = function (_PureComponent) {
    _inherits(Button, _PureComponent);

    function Button() {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));

        _this.validated = function () {
            var timeout = parseInt(_branding.transition.duration.fast, 10) + _branding.transition.callbackDelay;
            setTimeout(_this.props.validated, timeout);
        };
        _this.ref = function (button) {
            _this.button = button;
        };
        return _this;
    }

    _createClass(Button, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.valid) {
                this.validated();
            }
            if (this.props.focus) {
                this.button.focus();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref) {
            var valid = _ref.valid,
                focus = _ref.focus;

            if (valid && valid !== this.props.valid) {
                this.validated();
            }
            if (focus && focus !== this.props.focus) {
                this.button.focus();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                children = _a.children,
                className = _a.className,
                type = _a.type,
                href = _a.href,
                title = _a.title,
                primary = _a.primary,
                secondary = _a.secondary,
                valid = _a.valid,
                loading = _a.loading,
                warning = _a.warning,
                icon = _a.icon,
                unstyled = _a.unstyled,
                bordered = _a.bordered,
                onClick = _a.onClick,
                onBlur = _a.onBlur,
                onFocus = _a.onFocus,
                validated = _a.validated,
                focus = _a.focus,
                attrs = __rest(_a, ["children", "className", "type", "href", "title", "primary", "secondary", "valid", "loading", "warning", "icon", "unstyled", "bordered", "onClick", "onBlur", "onFocus", "validated", "focus"]);
            var Component = void 0;
            var typeProps = {};
            // If we pass a component to href, we get component type and we merge props
            if (typeof href !== 'string') {
                Component = href.type;
                typeProps = Object.assign({}, href.props);
            } else if (href.length > 0) {
                Component = 'a';
                typeProps = { href: href };
            } else {
                Component = 'button';
                typeProps = { type: type };
            }
            typeProps.ref = this.ref;
            typeProps.title = title;
            typeProps.onClick = eventHandler(onClick, typeProps.onClick);
            typeProps.onFocus = eventHandler(onFocus, typeProps.onFocus);
            typeProps.onBlur = eventHandler(onBlur, typeProps.onBlur);
            return _react2.default.createElement(
                Component,
                _extends({ className: (0, _classcat2.default)([(0, _utils2.default)({ button: true }), (0, _utils2.default)({
                        primary: primary, secondary: secondary, loading: loading, valid: valid, warning: warning, icon: icon, unstyled: unstyled, bordered: bordered
                    }, 'kirk-button'), className]) }, typeProps, attrs),
                loading && _react2.default.createElement(_loader2.default, { size: 48, inline: true }),
                valid && _react2.default.createElement(_checkIcon2.default, { validate: true, absolute: true, iconColor: _branding.color.white }),
                _react2.default.createElement(
                    'span',
                    {
                        className: 'jsx-' + _style4.default.__scopedHash
                    },
                    children
                ),
                _react2.default.createElement(_style2.default, {
                    styleId: _style4.default.__scopedHash,
                    css: _style4.default.__scoped
                })
            );
        }
    }]);

    return Button;
}(_react.PureComponent);

exports.default = Button;

Button.defaultProps = {
    type: 'button',
    href: '',
    children: '',
    className: '',
    primary: false,
    secondary: false,
    loading: false,
    valid: false,
    warning: false,
    icon: false,
    unstyled: false,
    bordered: false,
    focus: false,
    disabled: false
};
//# sourceMappingURL=index.jsx.map