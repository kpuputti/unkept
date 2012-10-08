/*! unkept - v0.1.0 - 2012-10-08
* https://github.com/kpuputti/unkept
* Copyright (c) 2012 Kimmo Puputti <kpuputti@gmail.com>; Licensed MIT */

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
