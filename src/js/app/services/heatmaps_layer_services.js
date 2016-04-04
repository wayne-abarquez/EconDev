(function(){
'use strict';

angular.module('demoApp')
    .factory('heatmapsLayerServices', ['WELDER_POINTS', 'ENGINEER_POINTS', 'HEATMAP_GRADIENTS', 'MACHINISTS_POINTS', 'gmapServices', heatmapsLayerServices]);

    function heatmapsLayerServices (WELDER_POINTS, ENGINEER_POINTS, HEATMAP_GRADIENTS, MACHINISTS_POINTS, gmapServices) {
        var service = {};

        var gradients = HEATMAP_GRADIENTS;

        var welderPoints = WELDER_POINTS;
        var engineerPoints = ENGINEER_POINTS;
        var machinistsPoints = MACHINISTS_POINTS;

        service.heatmaps =  {
            welders: null,
            engineers: null,
            machinists: null
        };

        service.showWeldersLayer = showWeldersLayer;
        service.hideWeldersLayer = hideWeldersLayer;

        service.showEngineersLayer = showEngineersLayer;
        service.hideEngineersLayer = hideEngineersLayer;

        service.showMachinistsLayer = showMachinistsLayer;
        service.hideMachinistsLayer = hideMachinistsLayer;


        function showWeldersLayer () {
            if(!service.heatmaps.welders) {
                var pointsArray = [];
                welderPoints.forEach(function(latLng) {
                    pointsArray.push(new google.maps.LatLng(latLng.lat, latLng.lng));
                });

                service.heatmaps.welders = gmapServices.initHeatmap(pointsArray, gradients[0]);
            }

            gmapServices.showLayer(service.heatmaps.welders);
        }

        function hideWeldersLayer () {
            gmapServices.hideLayer(service.heatmaps.welders);
        }

        function showEngineersLayer() {
            if (!service.heatmaps.engineers) {
                var pointsArray = [];
                engineerPoints.forEach(function (latLng) {
                    pointsArray.push(new google.maps.LatLng(latLng.lat, latLng.lng));
                });

                service.heatmaps.engineers = gmapServices.initHeatmap(pointsArray, gradients[1], 0.2, 0.3);
            }

            gmapServices.showLayer(service.heatmaps.engineers);
        }

        function hideEngineersLayer() {
            gmapServices.hideLayer(service.heatmaps.engineers);
        }

        function showMachinistsLayer() {
            if (!service.heatmaps.machinists) {
                var pointsArray = [];
                machinistsPoints.forEach(function (latLng) {
                    pointsArray.push(new google.maps.LatLng(latLng.lat, latLng.lng));
                });

                service.heatmaps.machinists = gmapServices.initHeatmap(pointsArray);
            }

            gmapServices.showLayer(service.heatmaps.machinists);
        }

        function hideMachinistsLayer() {
            gmapServices.hideLayer(service.heatmaps.machinists);
        }
        
        return service;
    }
}());