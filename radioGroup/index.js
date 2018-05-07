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

var RadioGroup = function (_PureComponent) {
    _inherits(RadioGroup, _PureComponent);

    function RadioGroup() {
        _classCallCheck(this, RadioGroup);

        var _this = _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).apply(this, arguments));

        _this.state = {
            value: _this.props.value
        };
        _this.onChangeGroup = function (_ref) {
            var value = _ref.value;

            _this.setState({ value: value });
            _this.props.onChange({ name: _this.props.name, value: value });
        };
        return _this;
    }

    _createClass(RadioGroup, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (newProps.value !== this.props.value) {
                this.onChangeGroup({ name: this.props.name, value: newProps.value });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                className = _props.className,
                name = _props.name,
                highlightedValue = _props.highlightedValue,
                loading = _props.loading,
                valid = _props.valid,
                validated = _props.validated,
                children = _props.children;

            return _react2.default.createElement(
                'div',
                {
                    className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)(['kirk-radioGroup', { 'kirk-radioGroup--hasHighlight': !!highlightedValue }, className]) || '')
                },
                _react2.default.Children.toArray(children).map(function (radio, index) {
                    if (_react2.default.isValidElement(radio)) {
                        var radioProps = radio.props;
                        var props = {
                            key: index,
                            name: name,
                            onChange: _this2.onChangeGroup,
                            checked: _this2.state.value === radioProps.value,
                            highlighted: highlightedValue === radioProps.value,
                            loading: loading && _this2.state.value === radioProps.value,
                            valid: valid && _this2.state.value === radioProps.value,
                            validated: validated
                        };
                        return (0, _react.cloneElement)(radio, props);
                    }
                    return null;
                }),
                _react2.default.createElement(_style2.default, {
                    styleId: _style4.default.__scopedHash,
                    css: _style4.default.__scoped
                })
            );
        }
    }]);

    return RadioGroup;
}(_react.PureComponent);

RadioGroup.defaultProps = {
    className: '',
    value: '',
    children: [],
    onChange: function onChange() {},

    highlightedValue: ''
};
exports.default = RadioGroup;
//# sourceMappingURL=index.jsx.map