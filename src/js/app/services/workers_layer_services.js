(function(){
'use strict';

angular.module('demoApp')
    .factory('workersLayerServices', ['gmapServices', 'WELDER_POINTS', 'ENGINEER_POINTS', 'MACHINISTS_POINTS', workersLayerServices]);

    function workersLayerServices (gmapServices, WELDER_POINTS, ENGINEER_POINTS, MACHINISTS_POINTS) {
        var service = {};

        var radius = 20000;

        service.markerClusterer = null;

        service.markers = [];

        service.initializeMarkers = initializeMarkers;
        service.showWorkersWithinBounds = showWorkersWithinBounds;
        service.hideMarkers = hideMarkers;

        function initializeMarkers () {
            if(service.markers.length > 0) return;

            initWelderMarkers();
            initEngineerMarkers();
            initMachinistsMarkers();

            service.markerClusterer = new MarkerClusterer(gmapServices.map);
        }

        function showWorkersWithinBounds () {
            if (service.markers.length <= 0) initializeMarkers();

            service.markerClusterer.clearMarkers();

            var mapCenter = gmapServices.map.getCenter();

            service.markers.forEach(function(marker){
               var distance = google.maps.geometry.spherical.computeDistanceBetween(mapCenter, marker.getPosition());
                if(distance <= radius) {
                    service.markerClusterer.addMarker(marker);
                }
            });
        }

        function hideMarkers () {
            if (service.markers.length <= 0) return;

            service.markerClusterer.clearMarkers();

            service.markers.forEach(function (marker) {
                gmapServices.hideMarker(marker);
            });
        }


        /* Non Scope Functions */

        function initWelderMarkers () {
            var char = 'W',
                bgColor = 'e74c3c',
                title = 'Welder';


            WELDER_POINTS.forEach(function(latLng){
                var marker = gmapServices.createLetterMarker(char, bgColor, title);
                marker.setPosition(latLng);
                //marker.setMap(gmapServices.map);
                service.markers.push(marker);
            });
        }

        function initEngineerMarkers () {
            var char = 'E',
                bgColor = '2980b9',
                title = 'Engineer';


            ENGINEER_POINTS.forEach(function (latLng) {
                var marker = gmapServices.createLetterMarker(char, bgColor, title);
                marker.setPosition(latLng);
                //marker.setMap(gmapServices.map);
                service.markers.push(marker);
            });
        }

        function initMachinistsMarkers () {
            var char = 'M',
                bgColor = '27ae60',
                title = 'Machinists';


            MACHINISTS_POINTS.forEach(function (latLng) {
                var marker = gmapServices.createLetterMarker(char, bgColor, title);
                marker.setPosition(latLng);
                //marker.setMap(gmapServices.map);
                service.markers.push(marker);
            });
        }

        return service;
    }
}());