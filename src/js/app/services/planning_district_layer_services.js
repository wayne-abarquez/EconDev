(function () {
    'use strict';

    angular.module('demoApp')
        .factory('planningDistrictLayerServices', ['gmapServices', 'webServices', planningDistrictLayerServices]);

    function planningDistrictLayerServices(gmapServices, webServices) {
        var service = {};

        var features = null;
        var jsonUrl = 'layers/geojson/planning_district.geojson';
        var opts = {
            pixelOffset: new google.maps.Size(0, 0)
        };

        var layerColor = '#ffa500';
        var lineProperties = {
            fillColor: layerColor,
            fillOpacity: 0.3,
            strokeColor: layerColor,
            strokeWeight: 1,
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
                        fillColor: lineProperties.fillColor,
                        fillOpacity: lineProperties.fillOpacity,
                        strokeColor: lineProperties.strokeColor,
                        strokeWeight: lineProperties.strokeWeight,
                        strokeOpacity: lineProperties.strokeOpacity
                    });
                });
            }
        }

        function clickCallback(event) {
            var arr = ['name', 'DOFFICE'];
            var labels = {'name': 'Name', 'DOFFICE': 'District Office'};
            var content = "";
            event.feature.forEachProperty(function (value, key) {
                if (arr.indexOf(key) !== -1) {
                    content += "<b> " + labels[key] + "</b> : " + value + "<br/>";
                }
            });
            content += "";
            gmapServices.geojsonInfoWindow.setContent(content);
        }

        return service;
    }
}());