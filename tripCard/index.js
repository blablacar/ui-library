'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _avatar = require('../avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _comfortIcon = require('../icon/comfortIcon');

var _comfortIcon2 = _interopRequireDefault(_comfortIcon);

var _lightningIcon = require('../icon/lightningIcon');

var _lightningIcon2 = _interopRequireDefault(_lightningIcon);

var _ladyIcon = require('../icon/ladyIcon');

var _ladyIcon2 = _interopRequireDefault(_ladyIcon);

var _itinerary = require('../itinerary');

var _itinerary2 = _interopRequireDefault(_itinerary);

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TripCard = function TripCard(_ref) {
  var className = _ref.className,
      href = _ref.href,
      itinerary = _ref.itinerary,
      driver = _ref.driver,
      price = _ref.price,
      _ref$flags = _ref.flags,
      flags = _ref$flags === undefined ? {} : _ref$flags,
      _ref$titles = _ref.titles,
      titles = _ref$titles === undefined ? {} : _ref$titles,
      _ref$highlighted = _ref.highlighted,
      highlighted = _ref$highlighted === undefined ? '' : _ref$highlighted,
      metaUrl = _ref.metaUrl;

  var displayFlags = highlighted.length === 0 && Object.keys(flags).length;
  var itemPropName = itinerary.departure.mainLabel + ' \u2192 ' + itinerary.arrival.mainLabel;
  var LinkComponent = void 0;
  var typeProps = {};
  // If we pass a component to href, we get component type and we merge props
  if (typeof href !== 'string') {
    LinkComponent = href.type;
    typeProps = Object.assign({}, href.props, { rel: 'nofollow' });
  } else {
    LinkComponent = 'a';
    typeProps = {
      href: href,
      rel: 'nofollow'
    };
  }
  return _react2.default.createElement(
    'li',
    { itemScope: true, itemType: 'http://schema.org/Event', className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)(['kirk-tripCard', { 'kirk-tripCard--highlighted': !!highlighted }, className]) || '')
    },
    _react2.default.createElement(
      LinkComponent,
      typeProps,
      _react2.default.createElement('meta', { itemProp: 'url', content: metaUrl, className: 'jsx-' + _style4.default.__scopedHash
      }),
      _react2.default.createElement('meta', { itemProp: 'name', content: itemPropName, className: 'jsx-' + _style4.default.__scopedHash
      }),
      _react2.default.createElement('meta', { itemProp: 'startDate', content: itinerary.departure.isoDate, className: 'jsx-' + _style4.default.__scopedHash
      }),
      _react2.default.createElement('meta', { itemProp: 'endDate', content: itinerary.arrival.isoDate, className: 'jsx-' + _style4.default.__scopedHash
      }),
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-tripCard-main'
        },
        _react2.default.createElement(_itinerary2.default, { className: 'kirk-tripCard-itinerary', departure: itinerary.departure, arrival: itinerary.arrival }),
        _react2.default.createElement(
          'span',
          {
            className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-tripCard-price'
          },
          price
        )
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-tripCard-bottom'
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-tripCard-driver'
          },
          _react2.default.createElement(_avatar2.default, { image: driver.avatarUrl, alt: driver.firstName }),
          _react2.default.createElement(
            'span',
            {
              className: 'jsx-' + _style4.default.__scopedHash
            },
            driver.firstName
          )
        ),
        highlighted && _react2.default.createElement(
          'span',
          {
            className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-tripCard-topText'
          },
          highlighted
        ),
        displayFlags && _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-tripCard-flags'
          },
          flags.ladiesOnly && _react2.default.createElement(_ladyIcon2.default, { title: titles.ladiesOnly || '' }),
          flags.maxTwo && _react2.default.createElement(_comfortIcon2.default, { title: titles.maxTwo || '' }),
          flags.autoApproval && _react2.default.createElement(_lightningIcon2.default, { title: titles.autoApproval || '' })
        )
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: _style4.default.__scopedHash,
      css: _style4.default.__scoped
    })
  );
};
exports.default = TripCard;
//# sourceMappingURL=index.jsx.map