'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.padstart');

var _lodash2 = _interopRequireDefault(_lodash);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _utils = require('../_utils');

var _utils2 = _interopRequireDefault(_utils);

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Whether or not Date#toLocaleTimeString supports arguments `locales` et `options`.
 */
var toLocaleTimeStringSupportsLocales = function () {
    try {
        new Date().toLocaleTimeString('i');
    } catch (e) {
        return e.name === 'RangeError';
    }
    return false;
}();
/**
 * Format given dateTime in the format HH:MM.
 */
var formatTimeValue = function formatTimeValue(dateTime) {
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    return (0, _lodash2.default)(hours.toString(), 2, '0') + ':' + (0, _lodash2.default)(minutes.toString(), 2, '0');
};
/**
 * Format given dateTime with `Date#toLocaleTimeString`.
 */
var formatTimeLabel = function formatTimeLabel(dateTime, locale) {
    if (toLocaleTimeStringSupportsLocales && locale) {
        return dateTime.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
    }
    return formatTimeValue(dateTime);
};

var TimePicker = function (_PureComponent) {
    _inherits(TimePicker, _PureComponent);

    function TimePicker() {
        _classCallCheck(this, TimePicker);

        /**
         * Returns a map of `{timeValue: timeLabel}` used to build the select options.
         * E.g. `{ '00:00': '12:00 AM', '08:00': '8:00 AM', '16:00': '4:00 PM' }`.
         */
        var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).apply(this, arguments));

        _this.generateTimeSteps = function (_ref) {
            var _ref$minuteStep = _ref.minuteStep,
                minuteStep = _ref$minuteStep === undefined ? 30 : _ref$minuteStep,
                locale = _ref.locale;

            var steps = {};
            var dt = new Date(0);
            dt.setHours(0);
            var _this$props$renderTim = _this.props.renderTime,
                renderTime = _this$props$renderTim === undefined ? formatTimeLabel : _this$props$renderTim;

            while (dt.getDate() === 1) {
                steps[formatTimeValue(dt)] = renderTime(dt, locale);
                dt.setMinutes(dt.getMinutes() + minuteStep);
            }
            return steps;
        };
        _this.state = {
            value: _this.getDefaultValue(),
            steps: _this.generateTimeSteps(_this.props)
        };
        _this.onChange = function (e) {
            var name = _this.props.name;
            var value = e.target.value;

            _this.setState({ value: value });
            _this.props.onChange({ name: name, value: value });
        };
        return _this;
    }

    _createClass(TimePicker, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var shouldRegenerateTimeSteps = newProps.locale !== this.props.locale || newProps.minuteStep !== this.props.minuteStep;
            if (shouldRegenerateTimeSteps) {
                this.setState({ steps: this.generateTimeSteps(newProps) });
            }
        }
    }, {
        key: 'getDefaultValue',
        value: function getDefaultValue() {
            if (!this.props.defaultValue) {
                var now = new Date(Date.now());
                now.setMinutes(0);
                return formatTimeValue(now);
            }
            return this.props.defaultValue;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                _props$disabled = _props.disabled,
                disabled = _props$disabled === undefined ? false : _props$disabled,
                name = _props.name;
            var steps = this.state.steps;

            return _react2.default.createElement(
                'div',
                { 'aria-disabled': disabled, className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)([(0, _utils2.default)({ timePicker: true }), className]) || '')
                },
                _react2.default.createElement(
                    'time',
                    {
                        className: 'jsx-' + _style4.default.__scopedHash
                    },
                    steps[this.state.value]
                ),
                _react2.default.createElement(
                    'select',
                    { name: name, value: this.state.value, disabled: disabled, onChange: this.onChange, className: 'jsx-' + _style4.default.__scopedHash
                    },
                    Object.keys(steps).map(function (key) {
                        return _react2.default.createElement(
                            'option',
                            { key: key, value: key, className: 'jsx-' + _style4.default.__scopedHash
                            },
                            steps[key]
                        );
                    })
                ),
                _react2.default.createElement(_style2.default, {
                    styleId: _style4.default.__scopedHash,
                    css: _style4.default.__scoped
                })
            );
        }
    }]);

    return TimePicker;
}(_react.PureComponent);
//# sourceMappingURL=index.jsx.map


exports.default = TimePicker;