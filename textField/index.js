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

var _branding = require('../_utils/branding');

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _crossIcon = require('../icon/crossIcon');

var _crossIcon2 = _interopRequireDefault(_crossIcon);

var _eyeIcon = require('../icon/eyeIcon');

var _eyeIcon2 = _interopRequireDefault(_eyeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayError = function DisplayError(error) {
    var className = 'kirk-error-message';
    if (_react2.default.isValidElement(error)) {
        return _react2.default.cloneElement(error, {
            className: className
        });
    }
    return _react2.default.createElement(
        'span',
        { role: 'alert', className: className },
        error
    );
};

var TextField = function (_PureComponent) {
    _inherits(TextField, _PureComponent);

    function TextField() {
        _classCallCheck(this, TextField);

        var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).apply(this, arguments));

        _this.state = {
            value: _this.props.defaultValue,
            showPassword: false
        };
        _this.onTextFieldChange = function (event) {
            _this.setState({ value: event.target.value }, _this.onChange);
            if (event.currentTarget.value === '') {
                _this.props.onClear();
            }
        };
        _this.onChange = function () {
            _this.props.onChange({
                name: _this.props.name,
                value: _this.state.value
            });
        };
        _this.clearValue = function () {
            _this.setState({ value: '' }, function () {
                _this.input.focus();
                _this.onChange();
                _this.props.onClear();
            });
        };
        _this.toggleShowPassword = function () {
            _this.setState(function (_ref) {
                var showPassword = _ref.showPassword;

                _this.input.focus();
                return { showPassword: !showPassword };
            });
        };
        _this.ref = function (input) {
            _this.input = input;
            _this.props.inputRef(input);
        };
        return _this;
    }

    _createClass(TextField, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.input && this.props.focus) {
                this.input.focus();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref2) {
            var defaultValue = _ref2.defaultValue,
                focus = _ref2.focus;

            if (this.props.defaultValue !== defaultValue) {
                this.setState({ value: defaultValue });
            }
            if (focus && this.props.focus !== focus) {
                this.input.focus();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                isTextArea = _props.isTextArea,
                addon = _props.addon,
                type = _props.type,
                placeholder = _props.placeholder,
                name = _props.name,
                id = _props.id,
                labelledBy = _props.labelledBy,
                label = _props.label,
                className = _props.className,
                error = _props.error,
                disabled = _props.disabled,
                readOnly = _props.readOnly,
                onFocus = _props.onFocus,
                onBlur = _props.onBlur,
                autoFocus = _props.autoFocus,
                required = _props.required,
                maxLength = _props.maxLength,
                autoCorrect = _props.autoCorrect,
                autoComplete = _props.autoComplete,
                buttonTitle = _props.buttonTitle;

            var value = this.state.value || '';
            var attrs = {
                type: type, placeholder: placeholder, name: name, id: id, 'aria-labelledby': labelledBy,
                value: value, maxLength: maxLength, autoComplete: autoComplete, autoCorrect: autoCorrect,
                // modifiers
                disabled: disabled, readOnly: readOnly, required: required, autoFocus: autoFocus,
                // actions
                onFocus: onFocus, onBlur: onBlur, onChange: this.onTextFieldChange, ref: this.ref
            };
            if (error) {
                attrs['aria-invalid'] = 'true';
            }
            var iconProps = {
                iconColor: _branding.color.secondaryText,
                size: '18'
            };
            if (type === 'number') {
                // Display numeric keyboard on iOS
                attrs.pattern = '[0-9]*';
                attrs.inputMode = 'numeric';
            }
            var buttonOnClick = type !== 'password' ? this.clearValue : this.toggleShowPassword;
            var shouldDisplayErrorMessage = error && typeof error !== 'boolean';
            return _react2.default.createElement(
                'div',
                {
                    className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)(['kirk-textField', (0, _utils2.default)({ error: !!error, disabled: disabled }), className]) || '')
                },
                label && _react2.default.createElement(
                    'label',
                    { htmlFor: id, className: 'jsx-' + _style4.default.__scopedHash
                    },
                    label
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-textField-wrapper'
                    },
                    addon,
                    isTextArea ? _react2.default.createElement('textarea', _extends({}, attrs, {
                        className: 'jsx-' + _style4.default.__scopedHash + ' ' + (attrs.className != null && attrs.className || '')
                    })) : _react2.default.createElement('input', _extends({}, attrs, { type: type === 'password' && this.state.showPassword ? 'text' : type, className: 'jsx-' + _style4.default.__scopedHash + ' ' + (attrs.className != null && attrs.className || '')
                    })),
                    !isTextArea && _react2.default.createElement(
                        _button2.default,
                        { className: 'kirk-textField-button', hidden: !value, unstyled: true, icon: true, onClick: buttonOnClick, tabIndex: '-1', title: buttonTitle },
                        type === 'password' ? _react2.default.createElement(_eyeIcon2.default, _extends({}, iconProps, { off: this.state.showPassword })) : _react2.default.createElement(_crossIcon2.default, iconProps)
                    )
                ),
                shouldDisplayErrorMessage && DisplayError(error),
                _react2.default.createElement(_style2.default, {
                    styleId: _style4.default.__scopedHash,
                    css: _style4.default.__scoped
                })
            );
        }
    }]);

    return TextField;
}(_react.PureComponent);

exports.default = TextField;

TextField.defaultProps = {
    inputRef: function inputRef() {},
    onClear: function onClear() {},

    type: 'text'
};
//# sourceMappingURL=index.jsx.map