(function () {
    'use strict';

    angular.module('demoApp')
        .factory('collegesLayerServices', ['gmapServices', 'webServices', collegesLayerServices]);

    function collegesLayerServices(gmapServices, webServices) {
        var service = {};

        var feature = null;
        var jsonUrl = 'layers/geojson/ms_colleges.geojson';
        var iconUrl = 'http://maps.google.com/mapfiles/kml/pal3/icon31.png';
        var opts = {
            icon: iconUrl,
            pixelOffset: new google.maps.Size(0, -28)
        };

        service.showLayer = showLayer;
        service.hideLayer = hideLayer;

        function showLayer() {
            webServices.loadJson(jsonUrl)
                .then(function (response) {
                    opts.clickCallback = clickCallback;
                    feature = gmapServices.loadGeoJson(response.data, opts);
                });
        }

        function hideLayer() {
            gmapServices.removeGeoJson(feature);
        }

        function clickCallback(event) {
            var content = '<b>' + event.feature.getProperty('name') + '</b>';
            gmapServices.geojsonInfoWindow.setContent(content);
        }

        return service;
    }
}());