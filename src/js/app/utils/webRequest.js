(function () {
    'use strict';

    angular.module('demoApp')
        .factory('webRequest', ["$http", 'BASE_URL', webRequest]);

    function webRequest($http, BASE_URL) {
        var service = {};

        // fix 401 errors being automatically handled by browsers
        var baseUrl = BASE_URL + "/";

        function buildParams(params) {
            if (params != null && params.isObject)
                return _.map(params, function (key, val) {
                    return key + "=" + value;
                }).join("&");
            return "";
        };

        service.get = function (url, params) {
            return $http.get(baseUrl + url + "?" + buildParams(params));
        };

        service.post = function (url, params) {
            return $http({
                url: baseUrl + url,
                method: "POST",
                data: JSON.stringify(params),
                headers: {'Content-Type': 'application/json'}
            });
        };

        service.put = function (url, params) {
            return $http({
                url: baseUrl + url,
                method: "PUT",
                data: JSON.stringify(params),
                headers: {'Content-Type': 'application/json'}
            });
        };

        service.delete = function (url) {
            return $http.delete(url);
        };

        return service;
    }
}());