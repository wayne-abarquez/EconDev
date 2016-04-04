(function () {
    'use strict';

    angular.module('demoApp')
        .factory('railroadsLayerServices', ['gmapServices', 'webServices', railroadsLayerServices]);

    function railroadsLayerServices(gmapServices, webServices) {
        var service = {};

        var features = null;
        var jsonUrl = '/layers/geojson/railroads.geojson';
        var opts = {
            pixelOffset: new google.maps.Size(0, 0)
        };

        var lineProperties = {
            strokeColor: '#625d4e',
            strokeWeight: 2,
            strokeOpacity: 0.6
        };

        service.showLayer = showLayer;
        service.hideLayer = hideLayer;

        function showLayer() {
            webServices.loadJson(jsonUrl)
                .then(function (response) {
                    opts.clickCallback = clickCallback;
                    features = gmapServices.loadGeoJson(response.data, opts);
                    applyStyles();
                });
        }

        function hideLayer() {
            gmapServices.removeGeoJson(features);
        }

        function applyStyles() {
            if (features.length > 0) {
                features.forEach(function (feature) {
                    gmapServices.map.data.overrideStyle(feature, {
                        strokeColor: lineProperties.strokeColor,
                        strokeWeight: lineProperties.strokeWeight
                    });
                });
            }
        }

        function clickCallback(event) {
            var arr = ['stroke', 'stroke-opacity', 'fill-opacity'];

            var content = "";
            event.feature.forEachProperty(function (value, key) {
                if(arr.indexOf(key) === -1) {
                    content += "<b> " + key + "</b> : " + value + "<br/>";
                }
            });
            gmapServices.geojsonInfoWindow.setContent(content);
        }

        return service;
    }
}());