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

var _icon = require('../icon');

var _branding = require('../_utils/branding');

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KEYCODES = {
    ESCAPE: 27
};

var DropdownButton = function (_PureComponent) {
    _inherits(DropdownButton, _PureComponent);

    function DropdownButton() {
        _classCallCheck(this, DropdownButton);

        var _this = _possibleConstructorReturn(this, (DropdownButton.__proto__ || Object.getPrototypeOf(DropdownButton)).apply(this, arguments));

        _this.state = {
            open: false
        };
        _this.close = function () {
            _this.setState({ open: false });
        };
        _this.toggle = function () {
            _this.setState(function (prevState) {
                return { open: !prevState.open };
            });
        };
        _this.handleOutsideMouseClick = function (e) {
            if (!_this.dropdownNode || _this.dropdownNode.contains(e.target) || _this.buttonNode.contains(e.target) || e.button && e.button !== 0) {
                return;
            }
            _this.close();
        };
        _this.handleKeydown = function (e) {
            if (e.keyCode === KEYCODES.ESCAPE) {
                _this.close();
            }
        };
        _this.refButton = function (ref) {
            _this.buttonNode = ref;
        };
        _this.refDropdown = function (ref) {
            _this.dropdownNode = ref;
        };
        return _this;
    }

    _createClass(DropdownButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('mouseup', this.handleOutsideMouseClick);
            document.addEventListener('touchstart', this.handleOutsideMouseClick);
            document.addEventListener('keydown', this.handleKeydown);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('keydown', this.handleKeydown);
            document.removeEventListener('mouseup', this.handleOutsideMouseClick);
            document.removeEventListener('touchstart', this.handleOutsideMouseClick);
        }
    }, {
        key: 'render',
        value: function render() {
            var _ref;

            var _props = this.props,
                className = _props.className,
                dropdown = _props.dropdown,
                dropdownPosition = _props.dropdownPosition,
                dropdownWithPointer = _props.dropdownWithPointer;

            return _react2.default.createElement(
                'div',
                { ref: this.refButton, className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'dropdownButton'
                },
                _react2.default.createElement(
                    'button',
                    { onClick: this.toggle, className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)(className) || '')
                    },
                    this.props.children,
                    _react2.default.createElement(_icon.ChevronIcon, { iconColor: _branding.color.primary, down: true })
                ),
                this.state.open && _react2.default.createElement(
                    'div',
                    { ref: this.refDropdown, className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)(['dropdown', (_ref = {}, _defineProperty(_ref, 'dropdown--' + dropdownPosition, true), _defineProperty(_ref, 'dropdown--withPointer', dropdownWithPointer), _ref)]) || '')
                    },
                    dropdown
                ),
                _react2.default.createElement(_style2.default, {
                    styleId: _style4.default.__scopedHash,
                    css: _style4.default.__scoped
                })
            );
        }
    }]);

    return DropdownButton;
}(_react.PureComponent);

DropdownButton.defaultProps = {
    dropdownPosition: 'left',
    dropdownWithPointer: false
};
exports.default = DropdownButton;
//# sourceMappingURL=index.jsx.map