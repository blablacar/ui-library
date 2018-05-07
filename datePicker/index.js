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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('react-dates/initialize');

var _reactDates = require('react-dates');

var _constants = require('react-dates/constants');

var _branding = require('../_utils/branding');

var _arrowIcon = require('../icon/arrowIcon');

var _arrowIcon2 = _interopRequireDefault(_arrowIcon);

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var navPrev = _react2.default.createElement(_arrowIcon2.default, { iconColor: _branding.color.primary });
var navNext = _react2.default.createElement(_arrowIcon2.default, { right: true, iconColor: _branding.color.primary });

var DatePicker = function (_Component) {
    _inherits(DatePicker, _Component);

    function DatePicker(props) {
        _classCallCheck(this, DatePicker);

        var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

        _this.state = {
            focused: true,
            date: _this.props.initialDate
        };
        _this.onDateChange = function (date) {
            _this.setState({ date: date }, function () {
                if (_this.props.onChange) {
                    _this.props.onChange({
                        name: _this.props.name,
                        value: _this.state.date ? _this.state.date.format('YYYY-MM-DD') : null
                    });
                }
            });
        };
        _this.renderDayContents = function (day) {
            return (
                // Adds an extra span to day table-cell for styling purpose
                _react2.default.createElement(
                    'span',
                    { className: 'CalendarDay__button' },
                    day.format('D')
                )
            );
        };
        _this.renderMonth = function (month) {
            var locale = _this.props.locale || '';
            return (
                // The default react-dates implementation is month.format('MMMM YYYY').
                // We want month.format('MMMM') for the current year.
                month.locale(locale).format(_this.props.monthFormat).replace('' + (0, _moment2.default)().year(), '').trim()
            );
        };
        _moment2.default.locale(props.locale);
        return _this;
    }

    _createClass(DatePicker, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (newProps.locale !== this.props.locale) {
                _moment2.default.locale(newProps.locale);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                {
                    className: 'jsx-' + _style4.default.__scopedHash + ' jsx-' + _theme2.default.__scopedHash + ' ' + ((0, _classcat2.default)(['datePicker', this.props.className]) || '')
                },
                _react2.default.createElement(_reactDates.DayPickerSingleDateController, { renderMonth: this.renderMonth, onDateChange: this.onDateChange, numberOfMonths: this.props.numberOfMonths, weekDayFormat: this.props.weekDayFormat, hideKeyboardShortcutsPanel: this.props.hideKeyboardShortcutsPanel, isOutsideRange: this.props.isOutsideRange, renderDayContents: this.renderDayContents, orientation: this.props.orientation, daySize: this.props.daySize, focused: this.state.focused, date: this.state.date, navPrev: navPrev, navNext: navNext }),
                _react2.default.createElement(_style2.default, {
                    styleId: _style4.default.__scopedHash,
                    css: _style4.default.__scoped
                }),
                _react2.default.createElement(_style2.default, {
                    styleId: _theme2.default.__scopedHash,
                    css: _theme2.default.__scoped
                })
            );
        }
    }]);

    return DatePicker;
}(_react.Component);

exports.default = DatePicker;

DatePicker.defaultProps = {
    initialDate: null,
    orientation: _constants.HORIZONTAL_ORIENTATION,
    numberOfMonths: 2,
    weekDayFormat: 'ddd',
    monthFormat: 'MMMM YYYY',
    hideKeyboardShortcutsPanel: true,
    onChange: function onChange() {},

    isOutsideRange: function isOutsideRange(day) {
        return !(0, _reactDates.isInclusivelyAfterDay)(day, (0, _moment2.default)());
    },
    daySize: 50,
    locale: 'en'
};
DatePicker.constants = {
    HORIZONTAL_ORIENTATION: _constants.HORIZONTAL_ORIENTATION, VERTICAL_ORIENTATION: _constants.VERTICAL_ORIENTATION, VERTICAL_SCROLLABLE: _constants.VERTICAL_SCROLLABLE
};
//# sourceMappingURL=index.jsx.map