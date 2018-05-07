'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _branding = require('../_utils/branding');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var className = _ref.className,
        _ref$iconColor = _ref.iconColor,
        iconColor = _ref$iconColor === undefined ? _branding.color.icon : _ref$iconColor,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 24 : _ref$size,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? '' : _ref$title;
    return _react2.default.createElement(
        'svg',
        { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', className: (0, _classcat2.default)(['kirk-icon', className]), width: size, height: size, 'aria-hidden': title.length === 0 },
        title && _react2.default.createElement(
            'title',
            null,
            title
        ),
        _react2.default.createElement('path', { fill: iconColor, fillRule: 'evenodd', clipRule: 'evenodd'
            // tslint:disable-next-line
            , d: 'M20.302 0H3.698C1.656 0 0 1.656 0 3.698v16.604C0 22.344 1.656 24 3.698 24h16.604C22.344 24 24 22.344 24 20.302V3.698C24 1.656 22.344 0 20.302 0zm-.6 16.897h-2.018c-.66 0-.742-.48-1.95-1.634-1.02-1.006-1.456-1.085-1.703-1.085-.22 0-.37.165-.37.55v1.537c0 .453-.26.632-1.332.632-1.758 0-3.708-1.085-5.19-3.09-2.212-2.98-2.775-5.205-2.775-5.686 0-.26.192-.438.453-.438h1.8c.466 0 .644.137.81.632.823 2.417 2.293 4.546 2.91 4.546.234 0 .262-.192.262-.687v-2.46c0-1.19-.673-1.29-.673-1.73 0-.174.137-.302.357-.302h2.884c.385 0 .44.138.44.605v3.337c0 .38.077.522.246.522.21 0 .403-.127.783-.55 1.184-1.305 2.156-3.378 2.156-3.378.125-.26.276-.44.688-.44h1.8c.356 0 .507.192.44.536-.207.96-2.28 3.887-2.28 3.887-.193.3-.276.466 0 .754.19.247.796.783 1.166 1.277.906.962 1.497 1.773 1.497 2.226 0 .345-.19.44-.397.44z' })
    );
};
//# sourceMappingURL=vkontakteIcon.jsx.map