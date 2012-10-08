(function () {

    'use strict';

    var unkept;



    // Expose as AMD module or as a window global.
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return unkept;
        });
    } else {
        window.unkept = unkept;
    }
}());
