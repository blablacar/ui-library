'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _increaseIcon = require('../icon/increaseIcon');

var _increaseIcon2 = _interopRequireDefault(_increaseIcon);

var _decreaseIcon = require('../icon/decreaseIcon');

var _decreaseIcon2 = _interopRequireDefault(_decreaseIcon);

var _branding = require('../_utils/branding');

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Support IE. Same value returned with Number.MAX_SAFE_INTEGER / Number.MIN_SAFE_INTEGER
var defaultInteger = Math.pow(2, 53) - 1;

var Stepper = function (_PureComponent) {
    _inherits(Stepper, _PureComponent);

    function Stepper() {
        _classCallCheck(this, Stepper);

        var _this = _possibleConstructorReturn(this, (Stepper.__proto__ || Object.getPrototypeOf(Stepper)).apply(this, arguments));

        _this.state = {
            value: _this.props.value
        };
        _this.increment = function () {
            _this.update(_this.state.value + _this.props.step);
        };
        _this.decrement = function () {
            _this.update(_this.state.value - _this.props.step);
        };
        return _this;
    }

    _createClass(Stepper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.update(this.state.value);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value !== this.state.value || nextProps.value <= this.props.max || nextProps.value >= this.props.min) {
                this.update(nextProps.value, nextProps);
            }
        }
    }, {
        key: 'update',
        value: function update(newValue) {
            var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props,
                min = _ref.min,
                max = _ref.max;

            var value = Math.max(min, Math.min(newValue, max));
            this.setState({ value: value });
            this.props.onChange({ name: this.props.name, value: value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                increaseLabel = _props.increaseLabel,
                decreaseLabel = _props.decreaseLabel,
                format = _props.format,
                name = _props.name,
                min = _props.min,
                max = _props.max;

            var isMax = this.state.value >= max;
            var isMin = this.state.value <= min;
            return _react2.default.createElement(
                'div',
                {
                    className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-stepper'
                },
                _react2.default.createElement(
                    _button2.default,
                    { type: 'button', className: 'kirk-stepper-decrement', unstyled: true, disabled: isMin, onClick: this.decrement },
                    _react2.default.createElement(_decreaseIcon2.default, { title: decreaseLabel, iconColor: isMin ? _branding.color.disabled : _branding.color.primary })
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-stepper-value'
                    },
                    format(this.state.value)
                ),
                _react2.default.createElement(
                    'label',
                    {
                        className: 'jsx-' + _style4.default.__scopedHash
                    },
                    _react2.default.createElement(
                        'span',
                        {
                            className: 'jsx-' + _style4.default.__scopedHash
                        },
                        children
                    ),
                    _react2.default.createElement('input', { type: 'hidden', name: name, value: format(this.state.value), readOnly: true, className: 'jsx-' + _style4.default.__scopedHash
                    })
                ),
                _react2.default.createElement(
                    _button2.default,
                    { type: 'button', className: 'kirk-stepper-increment', unstyled: true, disabled: isMax, onClick: this.increment },
                    _react2.default.createElement(_increaseIcon2.default, { title: increaseLabel, iconColor: isMax ? _branding.color.disabled : _branding.color.primary })
                ),
                _react2.default.createElement(_style2.default, {
                    styleId: _style4.default.__scopedHash,
                    css: _style4.default.__scoped
                })
            );
        }
    }]);

    return Stepper;
}(_react.PureComponent);

exports.default = Stepper;

Stepper.defaultProps = {
    value: 0,
    step: 1,
    max: defaultInteger,
    min: -defaultInteger,
    format: function format(value) {
        return value;
    },
    onChange: function onChange() {}
};
//# sourceMappingURL=index.jsx.map