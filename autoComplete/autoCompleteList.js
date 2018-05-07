'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _exenv = require('exenv');

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _utils = require('../_utils');

var _utils2 = _interopRequireDefault(_utils);

var _autoCompleteListItem = require('./autoCompleteListItem');

var _autoCompleteListItem2 = _interopRequireDefault(_autoCompleteListItem);

var _autoCompleteListStyle = require('./autoCompleteListStyle');

var _autoCompleteListStyle2 = _interopRequireDefault(_autoCompleteListStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoCompleteList = function (_Component) {
    _inherits(AutoCompleteList, _Component);

    function AutoCompleteList() {
        _classCallCheck(this, AutoCompleteList);

        var _this = _possibleConstructorReturn(this, (AutoCompleteList.__proto__ || Object.getPrototypeOf(AutoCompleteList)).apply(this, arguments));

        _this.state = {
            highlightedIndex: null
        };
        _this.onKeyboardEventArrowDown = function (e) {
            e.preventDefault();
            var itemsLength = _this.props.items.length;
            if (!itemsLength) return;
            var highlightedIndex = _this.state.highlightedIndex;

            var index = highlightedIndex === null || highlightedIndex === itemsLength - 1 ? 0 : highlightedIndex + 1;
            _this.setState({
                highlightedIndex: index
            });
        };
        _this.onKeyboardEventArrowUp = function (e) {
            e.preventDefault();
            var itemsLength = _this.props.items.length;
            if (itemsLength) {
                var highlightedIndex = _this.state.highlightedIndex;

                var index = highlightedIndex === null || highlightedIndex === 0 ? itemsLength - 1 : highlightedIndex - 1;
                _this.setState({
                    highlightedIndex: index
                });
            }
        };
        _this.onKeyboardEventEnter = function (e) {
            if (_this.state.highlightedIndex == null) {
                return;
            }
            e.preventDefault();
            var item = _this.props.items[_this.state.highlightedIndex];
            _this.props.onSelect(item);
        };
        _this.handleKeydown = function (e) {
            if (e.keyCode === 13) {
                _this.onKeyboardEventEnter(e);
            } else if (e.keyCode === 38) {
                _this.onKeyboardEventArrowUp(e);
            } else if (e.keyCode === 40) {
                _this.onKeyboardEventArrowDown(e);
            }
        };
        return _this;
    }

    _createClass(AutoCompleteList, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                highlightedIndex: null
            });
            if (_exenv.canUseEventListeners && nextProps.visible !== this.props.visible) {
                if (nextProps.visible) {
                    document.addEventListener('keydown', this.handleKeydown);
                } else {
                    document.removeEventListener('keydown', this.handleKeydown);
                }
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.visible && _exenv.canUseEventListeners) {
                document.removeEventListener('keydown', this.handleKeydown);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (!this.props.visible || this.props.items.length <= 0) {
                return null;
            }
            return _react2.default.createElement(
                'ul',
                { key: this.props.name, role: 'listbox', className: 'jsx-' + _autoCompleteListStyle2.default.__scopedHash + ' ' + ((0, _classcat2.default)([(0, _utils2.default)({ 'autoComplete-list': true }), this.props.className]) || '')
                },
                this.props.items.slice(0, this.props.maxItems).map(function (item, index) {
                    return _react2.default.createElement(
                        _autoCompleteListItem2.default,
                        { key: _this2.props.itemKey(item), item: item, className: _this2.props.itemClassName, highlighted: index === _this2.state.highlightedIndex, loading: index === _this2.props.loadingItemIndex, select: _this2.props.onSelect, valid: index === _this2.props.loadingItemIndex && _this2.props.valid, validated: _this2.props.validated },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'jsx-' + _autoCompleteListStyle2.default.__scopedHash
                            },
                            _this2.props.renderItem({ item: item, index: index })
                        )
                    );
                }),
                _react2.default.createElement(_style2.default, {
                    styleId: _autoCompleteListStyle2.default.__scopedHash,
                    css: _autoCompleteListStyle2.default.__scoped
                })
            );
        }
    }]);

    return AutoCompleteList;
}(_react.Component);

exports.default = AutoCompleteList;

AutoCompleteList.defaultProps = {
    maxItems: Infinity,
    itemKey: function itemKey(item) {
        return JSON.stringify(item);
    },
    visible: false,
    loadingItemIndex: -1
};
//# sourceMappingURL=autoCompleteList.jsx.map