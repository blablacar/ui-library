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

var _utils = require('../_utils');

var _utils2 = _interopRequireDefault(_utils);

var _itemChoice = require('../itemChoice');

var _itemChoice2 = _interopRequireDefault(_itemChoice);

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_Component) {
    _inherits(Radio, _Component);

    function Radio() {
        _classCallCheck(this, Radio);

        var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));

        _this.onChange = function () {
            var _this$props = _this.props,
                name = _this$props.name,
                value = _this$props.value;

            _this.props.onChange({ name: name, value: value });
        };
        return _this;
    }

    _createClass(Radio, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                name = _props.name,
                value = _props.value,
                subLabel = _props.subLabel,
                highlighted = _props.highlighted,
                checked = _props.checked,
                children = _props.children,
                icon = _props.icon,
                loading = _props.loading,
                valid = _props.valid,
                validated = _props.validated,
                key = _props.key;

            return _react2.default.createElement(
                _itemChoice2.default,
                { key: key, href: _react2.default.createElement('label', {
                        className: 'jsx-' + _style4.default.__scopedHash
                    }), label: children, subLabel: subLabel, highlighted: highlighted, className: (0, _classcat2.default)([(0, _utils2.default)({ radio: true }), className]), loading: loading, valid: valid, validated: validated },
                _react2.default.createElement('input', { type: 'radio', name: name, checked: checked, value: value, onChange: this.onChange, className: 'jsx-' + _style4.default.__scopedHash
                }),
                icon,
                _react2.default.createElement(_style2.default, {
                    styleId: _style4.default.__scopedHash,
                    css: _style4.default.__scoped
                })
            );
        }
    }]);

    return Radio;
}(_react.Component);

exports.default = Radio;

Radio.defaultProps = {
    onChange: function onChange() {},

    checked: false,
    highlighted: false,
    loading: false,
    valid: false
};
//# sourceMappingURL=index.jsx.map