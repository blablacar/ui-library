'use strict';

var _index = require('./index');

it('Should render prefix syntax with the base class', function () {
    expect((0, _index.prefix)({}, 'base')).toEqual([]);
    expect((0, _index.prefix)({ modifiers: true }, 'base')).toEqual(['base-modifiers']);
    expect((0, _index.prefix)({ modifiers: false }, 'base')).toEqual([]);
    expect((0, _index.prefix)({ 'modifier-1': true, 'modifier-2': false }, 'base')).toEqual(['base-modifier-1']);
});
//# sourceMappingURL=index.unit.js.map