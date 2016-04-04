(function () {
    'use strict';

    angular.module('demoApp')
        .factory('toxicLayerServices', ['gmapServices', 'webServices', toxicLayerServices]);

    function toxicLayerServices(gmapServices, webServices) {
        var service = {};

        var feature = null;
        var jsonUrl = 'layers/geojson/toxics.geojson';
        var iconUrl = 'http://maps.google.com/mapfiles/kml/pal3/icon47.png';
        var opts = {
            icon: iconUrl,
            pixelOffset: new google.maps.Size(0, -28)
        };

        service.showLayer = showLayer;
        service.hideLayer = hideLayer;

        function showLayer() {
            webServices.loadJson(jsonUrl)
                .then(function (response) {
                    //opts.clickCallback = clickCallback;
                    feature = gmapServices.loadGeoJson(response.data, opts);
                });
        }

        function hideLayer() {
            gmapServices.removeGeoJson(feature);
        }

        //function clickCallback(event) {
        //    var content = '<b>';
        //    content += event.feature.getProperty('name') || '';
        //    content += '</b>';
        //    var description = event.feature.getProperty('description');
        //    if (description) {
        //        content += '<br>' + description;
        //    }
        //    gmapServices.geojsonInfoWindow.setContent(content);
        //}

        return service;
    }
}());