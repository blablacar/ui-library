'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _branding = require('../_utils/branding');

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _crossIcon = require('../icon/crossIcon');

var _crossIcon2 = _interopRequireDefault(_crossIcon);

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

var Modal = function (_Component) {
    _inherits(Modal, _Component);

    function Modal() {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));

        _this.handleOutsideMouseClick = function (e) {
            var isButton = e.button && e.button !== 0;
            if (!_this.contentNode || _this.contentNode.contains(e.target) || isButton) {
                return;
            }
            _this.props.close();
        };
        _this.handleKeydown = function (event) {
            if (event.keyCode === KEYCODES.ESCAPE) {
                _this.props.close();
            }
        };
        _this.refContent = function (contentNode) {
            _this.contentNode = contentNode;
        };
        return _this;
    }

    _createClass(Modal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.closeOnEsc) {
                document.addEventListener('keydown', this.handleKeydown);
            }
            if (this.props.closeOnOutsideClick) {
                document.addEventListener('mouseup', this.handleOutsideMouseClick);
                document.addEventListener('touchstart', this.handleOutsideMouseClick);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.closeOnEsc) {
                document.removeEventListener('keydown', this.handleKeydown);
            }
            if (this.props.closeOnOutsideClick) {
                document.removeEventListener('mouseup', this.handleOutsideMouseClick);
                document.removeEventListener('touchstart', this.handleOutsideMouseClick);
            }
            if (this.portalNode) {
                document.body.removeChild(this.portalNode);
            }
            this.portalNode = null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _ref;

            var baseClassName = 'kirk-modal';
            if (!this.portalNode) {
                var dimmer = document.createElement('div');
                dimmer.className = baseClassName + '-dimmer' + (this.props.fullscreen ? '--fullscreen' : '') + '\n      ' + baseClassName + '-dimmer' + (this.props.displayDimmer ? '--visible' : '--hide');
                this.portalNode = dimmer;
                document.body.appendChild(this.portalNode);
            }
            var classNames = (0, _classcat2.default)([baseClassName, (_ref = {}, _defineProperty(_ref, baseClassName + '--fullscreen', this.props.fullscreen), _defineProperty(_ref, baseClassName + '--large', this.props.large), _defineProperty(_ref, baseClassName + '--hasCloseButton', this.props.displayCloseButton), _ref), this.props.className]);
            var modalElement = _react2.default.createElement(
                'div',
                {
                    className: 'jsx-' + _style4.default.__scopedHash + ' ' + (classNames || '')
                },
                _react2.default.createElement(
                    'div',
                    { ref: this.refContent, className: 'jsx-' + _style4.default.__scopedHash + ' ' + (baseClassName + '-dialog')
                    },
                    this.props.displayCloseButton && _react2.default.createElement(
                        _button2.default,
                        { icon: true, className: baseClassName + '-closeButton', onClick: this.props.close, title: this.props.closeButtonTitle },
                        _react2.default.createElement(_crossIcon2.default, { size: '18', iconColor: _branding.color.accent })
                    ),
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'jsx-' + _style4.default.__scopedHash + ' ' + (baseClassName + '-body')
                        },
                        this.props.children
                    )
                ),
                _react2.default.createElement(_style2.default, {
                    styleId: _style4.default.__scopedHash,
                    css: _style4.default.__scoped
                })
            );
            // Wrapper used for motion transition
            var wrapper = this.props.wrapper;

            if (wrapper) {
                var _Component2 = wrapper.type;
                var typeProps = Object.assign({}, wrapper.props);
                return (0, _reactDom.createPortal)(_react2.default.createElement(
                    _Component2,
                    typeProps,
                    modalElement
                ), this.portalNode);
            }
            return (0, _reactDom.createPortal)(modalElement, this.portalNode);
        }
    }]);

    return Modal;
}(_react.Component);

Modal.defaultProps = {
    closeOnEsc: true,
    closeOnOutsideClick: false,
    displayCloseButton: false,
    large: false,
    fullscreen: false,
    displayDimmer: false,
    wrapper: null
};
exports.default = Modal;
//# sourceMappingURL=index.jsx.map