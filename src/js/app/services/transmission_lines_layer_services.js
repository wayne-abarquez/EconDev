(function () {
    'use strict';

    angular.module('demoApp')
        .factory('transmissionLinesLayerServices', ['gmapServices', 'webServices', transmissionLinesLayerServices]);

    function transmissionLinesLayerServices(gmapServices, webServices) {
        var service = {};

        var features = null;
        var jsonUrl = '/layers/geojson/transmission_lines.geojson';
        var opts = {
            pixelOffset: new google.maps.Size(0, 0)
        };

        var layerColor = '#8b0504';
        var lineProperties = {
            strokeColor: layerColor,
            strokeWeight: 2,
            strokeOpacity: 0.8
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
                        strokeWeight: lineProperties.strokeWeight,
                        strokeOpacity: lineProperties.strokeOpacity
                    });
                });
            }
        }

        function clickCallback(event) {
            var arr = ['stroke', 'stroke-opacity', 'fill-opacity'];
            var content = "";

            event.feature.forEachProperty(function (value, key) {
                if (arr.indexOf(key) === -1) {
                    content += "<b> " + key + "</b> : " + value + "<br/>";
                }
            });
            gmapServices.geojsonInfoWindow.setContent(content);
        }

        return service;
    }
}());