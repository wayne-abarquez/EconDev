(function () {
    'use strict';

    angular.module('demoApp')
        .factory('webServices', ["webRequest", '$http', webServices]);

    function webServices(webRequest, $http) {
        var service = {};

        /*
         * Load JSON
         */
        service.loadJson = function (url) {
            return $http.get(url);
        };

        return service;
    }
}());