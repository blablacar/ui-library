'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var prefix = exports.prefix = function prefix() {
    var modifiers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var baseClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'kirk';

    var mods = Object.keys(modifiers).filter(function (elem) {
        return modifiers[elem];
    });
    return [].concat(mods.map(function (modifier) {
        return baseClass + '-' + modifier;
    }));
};
exports.default = prefix;
//# sourceMappingURL=index.js.map