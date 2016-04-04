(function () {
    'use strict';

    angular.module('demoApp')
        .factory('webServices', ["webRequest", webServices]);

    function webServices(webRequest) {
        var service = {};

        /*
         * Load JSON
         */
        service.loadJson = function (url) {
            return webRequest.get(url);
        };

        return service;
    }
}());