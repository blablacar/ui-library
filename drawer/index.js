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

var KEYCODES = {
    ESCAPE: 27
};

var Drawer = function (_PureComponent) {
    _inherits(Drawer, _PureComponent);

    function Drawer() {
        _classCallCheck(this, Drawer);

        var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).apply(this, arguments));

        _this.contentStyles = {
            width: _this.props.width
        };
        _this.state = {
            open: false
        };
        _this.onTransitionEnd = function () {
            if (_this.state.open) {
                _this.props.onOpen();
            } else {
                _this.props.onClose();
            }
            _this.props.onChange(_this.state.open);
        };
        _this.open = function () {
            _this.setState({ open: true });
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
            var isButton = e.button && e.button !== 0;
            if (!_this.contentNode || e.target.tagName !== 'ASIDE' || isButton) {
                return;
            }
            _this.close();
        };
        _this.handleKeydown = function (e) {
            if (e.keyCode === KEYCODES.ESCAPE) {
                _this.close();
            }
        };
        _this.refContent = function (contentNode) {
            _this.contentNode = contentNode;
        };
        return _this;
    }

    _createClass(Drawer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            document.addEventListener('mouseup', this.handleOutsideMouseClick);
            document.addEventListener('touchstart', this.handleOutsideMouseClick);
            document.addEventListener('keydown', this.handleKeydown);
            // Apply "open" CSS animation using requestAnimationFrame as browsers are not rerendering
            // stuff that changed in the same animation frame.
            requestAnimationFrame(function () {
                // This nested requestAnimationFrame here is only needed for Firefox
                requestAnimationFrame(_this2.open);
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref) {
            var width = _ref.width;

            if (this.props.width !== width) {
                this.contentStyles.width = width;
            }
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
            return _react2.default.createElement(
                'aside',
                {
                    className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)(['drawer', {
                        'drawer--open': this.state.open,
                        'drawer--close': !this.state.open
                    }, this.props.className]) || '')
                },
                _react2.default.createElement(
                    'div',
                    { ref: this.refContent, style: this.contentStyles, onTransitionEnd: this.onTransitionEnd, className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'scrollableContent'
                    },
                    this.props.children
                ),
                _react2.default.createElement(_style2.default, {
                    styleId: _style4.default.__scopedHash,
                    css: _style4.default.__scoped
                })
            );
        }
    }]);

    return Drawer;
}(_react.PureComponent);

exports.default = Drawer;

Drawer.defaultProps = {
    width: '400px',
    onOpen: function onOpen() {},
    onClose: function onClose() {},
    onChange: function onChange(isOpen) {}
};
//# sourceMappingURL=index.jsx.map