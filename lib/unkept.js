(function () {

    'use strict';

    var unkept;

    // Expose as AMD module or as a window global.
    // TODO: also add CommonJS/Node.js support?
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return unkept;
        });
    } else {
        window.unkept = unkept;
    }
}());
