'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_PureComponent) {
    _inherits(Checkbox, _PureComponent);

    function Checkbox() {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));

        _this.state = {
            isChecked: _this.props.checked,
            disabled: _this.props.disabled
        };
        _this.onChange = function () {
            _this.setState(function (prevState) {
                var value = !prevState.isChecked;
                var props = { name: _this.props.name, value: value };
                _this.props.onChange(props);
                return {
                    isChecked: value,
                    disabled: false
                };
            });
        };
        _this.updateCheckedState = function () {
            return _this.setState(function (prevState) {
                return {
                    isChecked: !prevState.isChecked,
                    disabled: false
                };
            });
        };
        return _this;
    }

    _createClass(Checkbox, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (newProps.checked !== this.props.checked) {
                this.setState({ isChecked: newProps.checked });
            }
            if (newProps.disabled !== this.props.disabled) {
                this.setState({ disabled: newProps.disabled });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                name = _props.name,
                children = _props.children,
                value = _props.value,
                subLabel = _props.subLabel;

            return _react2.default.createElement(
                'label',
                {
                    className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)(['kirk-checkbox', className]) || '')
                },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'jsx-' + _style4.default.__scopedHash
                    },
                    _react2.default.createElement('input', { type: 'checkbox', name: name, onChange: this.onChange, value: value, checked: this.state.isChecked, disabled: this.state.disabled, className: 'jsx-' + _style4.default.__scopedHash
                    }),
                    _react2.default.createElement('span', { 'aria-hidden': 'true', className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)({ checked: this.state.isChecked }) || '')
                    })
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'jsx-' + _style4.default.__scopedHash
                    },
                    _react2.default.createElement(
                        'span',
                        {
                            className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-label'
                        },
                        children
                    ),
                    subLabel && _react2.default.createElement(
                        'span',
                        {
                            className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-subLabel'
                        },
                        subLabel
                    )
                ),
                _react2.default.createElement(_style2.default, {
                    styleId: _style4.default.__scopedHash,
                    css: _style4.default.__scoped
                })
            );
        }
    }]);

    return Checkbox;
}(_react.PureComponent);

exports.default = Checkbox;

Checkbox.defaultProps = {
    className: '',
    subLabel: '',
    checked: false,
    disabled: false
};
//# sourceMappingURL=index.jsx.map