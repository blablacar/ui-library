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

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('../_utils');

var _utils2 = _interopRequireDefault(_utils);

var _textField = require('../textField');

var _textField2 = _interopRequireDefault(_textField);

var _autoCompleteList = require('./autoCompleteList');

var _autoCompleteList2 = _interopRequireDefault(_autoCompleteList);

var _autoCompleteListItemDefault = require('./autoCompleteListItemDefault');

var _autoCompleteListItemDefault2 = _interopRequireDefault(_autoCompleteListItemDefault);

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialState = {
    busy: false,
    items: [],
    value: '',
    query: '',
    noResults: false
};

var AutoComplete = function (_Component) {
    _inherits(AutoComplete, _Component);

    function AutoComplete(props) {
        _classCallCheck(this, AutoComplete);

        var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this, props));

        _this.onInputKeydown = function (e) {
            var KEY_CODE_ENTER = 13;
            if (e.keyCode === KEY_CODE_ENTER) {
                e.preventDefault();
            }
        };
        _this.onInputChange = function (_ref) {
            var value = _ref.value;

            _this.currentValue = value;
            if (_this.hasMinCharsForSearch()) {
                _this.setState({ noResults: false, query: value }, _this.searchForItems);
            } else {
                _this.clearBusyTimeout();
                _this.setState({ noResults: false, busy: false, items: [] });
            }
            _this.props.onInputChange({ value: value });
        };
        _this.onSelectItem = function (item) {
            _this.setState({
                items: [],
                query: _this.props.renderQuery(item),
                value: _this.props.getItemValue(item)
            }, function () {
                _this.input.select();
                _this.props.onSelect({ name: _this.props.name, value: _this.state.value, item: item });
            });
        };
        _this.clearBusyTimeout = function () {
            if (_this.busyTimeout) {
                _this.busyTimeout = clearTimeout(_this.busyTimeout);
            }
        };
        _this.showBusy = function () {
            _this.setState({ busy: true });
        };
        _this.inputRef = function (input) {
            _this.input = input;
        };
        if (props.debounceTimeout > 0) {
            _this.searchForItems = (0, _lodash2.default)(_this.searchForItems, props.debounceTimeout);
        } else {
            _this.searchForItems = _this.searchForItems.bind(_this);
        }
        _this.currentValue = '';
        _this.state = Object.assign({}, initialState, { query: _this.props.defaultValue });
        return _this;
    }

    _createClass(AutoComplete, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.input && _exenv.canUseEventListeners) {
                this.input.addEventListener('keydown', this.onInputKeydown);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var shouldRenderItems = this.props.isSearching && nextProps.isSearching === false;
            if (this.props.defaultValue !== nextProps.defaultValue) {
                this.setState({ query: nextProps.defaultValue });
            }
            if (shouldRenderItems) {
                this.clearBusyTimeout();
                this.setState({
                    busy: false,
                    noResults: nextProps.items.length === 0,
                    items: nextProps.items
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.input && _exenv.canUseEventListeners) {
                this.input.removeEventListener('keydown', this.onInputKeydown);
            }
        }
    }, {
        key: 'hasMinCharsForSearch',
        value: function hasMinCharsForSearch() {
            return String(this.currentValue).length >= this.props.searchForItemsMinChars;
        }
    }, {
        key: 'searchForItems',
        value: function searchForItems() {
            // If a long `debounceTimeout` is setup, it may happen that a `searchForItems`
            // is still scheduled to be called while the user has modified the query
            // during that lapse of time. Therefore, the check below verify the real input value
            // against the searchForItemsMinChars prop.
            if (!this.hasMinCharsForSearch()) return;
            this.busyTimeout = window.setTimeout(this.showBusy, this.props.busyTimeout);
            this.props.searchForItems(this.state.query);
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.setState(initialState);
        }
    }, {
        key: 'render',
        value: function render() {
            var shouldDisplayEmptyState = !this.hasMinCharsForSearch() && this.props.showList && this.props.renderEmptySearch.length > 0;
            var shouldDisplayBusyState = this.state.busy && this.props.showList;
            var shouldDisplayNoResults = !this.state.busy && this.state.noResults && this.props.showList;
            var shouldDisplayAutoCompleteList = this.state.items.length > 0 && !this.state.busy && this.props.showList;
            return _react2.default.createElement(
                'div',
                { role: 'search', className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)([(0, _utils2.default)({ autoComplete: true }), this.props.className]) || '')
                },
                _react2.default.createElement(_textField2.default, { type: 'search', className: this.props.inputClassName, name: this.props.name, onChange: this.onInputChange, onFocus: this.props.onFocus, onBlur: this.props.onBlur, onClear: this.props.onClear, placeholder: this.props.placeholder, defaultValue: String(this.state.query), addon: this.props.inputAddon, inputRef: this.inputRef, autoCorrect: 'off', autoComplete: 'off', autoFocus: this.props.autoFocus, focus: this.props.focus, buttonTitle: this.props.buttonTitle }),
                shouldDisplayBusyState && _react2.default.createElement(
                    'div',
                    {
                        className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)([(0, _utils2.default)({ 'autoComplete-body': true }), this.props.bodyClassName]) || '')
                    },
                    this.props.renderBusy({ query: this.state.query })
                ),
                shouldDisplayNoResults && _react2.default.createElement(
                    'div',
                    {
                        className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)([(0, _utils2.default)({ 'autoComplete-body': true }), this.props.bodyClassName]) || '')
                    },
                    this.props.renderNoResults({ query: this.state.query })
                ),
                shouldDisplayEmptyState && _react2.default.createElement(
                    'ul',
                    {
                        className: 'jsx-' + _style4.default.__scopedHash
                    },
                    this.props.renderEmptySearch.map(function (item, index) {
                        if ((0, _react.isValidElement)(item)) {
                            var props = { key: index };
                            return (0, _react.cloneElement)(item, props);
                        }
                        return null;
                    })
                ),
                _react2.default.createElement(_autoCompleteList2.default, { name: this.props.name + '-list', items: this.state.items, maxItems: this.props.maxItems, renderItem: this.props.renderItem, onSelect: this.onSelectItem, visible: shouldDisplayAutoCompleteList, loadingItemIndex: this.props.loadingItemIndex, itemClassName: this.props.itemClassName, valid: this.props.valid, validated: this.props.validated }),
                _react2.default.createElement(_style2.default, {
                    styleId: _style4.default.__scopedHash,
                    css: _style4.default.__scoped
                })
            );
        }
    }]);

    return AutoComplete;
}(_react.Component);

exports.default = AutoComplete;

AutoComplete.defaultProps = {
    isSearching: false,
    searchForItemsMinChars: 3,
    maxItems: Infinity,
    renderItem: _autoCompleteListItemDefault2.default,
    renderBusy: function renderBusy() {
        return _react2.default.createElement(
            'div',
            null,
            'Loading\u2026'
        );
    },
    renderNoResults: function renderNoResults() {
        return _react2.default.createElement(
            'div',
            null,
            'No results'
        );
    },
    renderEmptySearch: [],
    onInputChange: function onInputChange() {},
    onSelect: function onSelect() {},
    onClear: function onClear() {},

    renderQuery: function renderQuery(item) {
        return [item.title, item.description].filter(Boolean).join(',');
    },
    getItemValue: function getItemValue(item) {
        return item.title;
    },
    busyTimeout: 150,
    debounceTimeout: 500,
    autoFocus: false,
    focus: false,
    buttonTitle: null,
    loadingItemIndex: -1,
    defaultValue: '',
    showList: true,
    valid: false
};
//# sourceMappingURL=index.jsx.map