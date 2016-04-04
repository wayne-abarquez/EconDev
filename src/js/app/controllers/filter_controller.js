(function () {
    'use strict';

    angular.module('demoApp')
        .controller('filterController', ['gmapServices', 'workersLayerServices', filterController]);

    function filterController(gmapServices, workersLayerServices) {
        var vm = this;

        vm.placeInput = '';
        vm.filterLayer = '';

        var searchMarker = null;
        var icon = 'images/markers/red.png';
        var searchInfowindow = gmapServices.createInfoWindow('Workers within 20 kilometers')

        var autocomplete = null;

        vm.initialize = initialize;
        vm.clearVisuals = clearVisuals;

        vm.initialize();

        /* Controller Functions here */

        function initialize() {
            workersLayerServices.initializeMarkers();

            autocomplete = gmapServices.initializeAutocomplete('filter-location-input');

            autocomplete.addListener('place_changed', placeChangeCallback);
        }

        function showWorkers(location) {
            if (!searchMarker) {
                searchMarker = gmapServices.createCustomMarker(location, icon);
            } else {
                if (!searchMarker.getMap()) gmapServices.showMarker(searchMarker);

                searchMarker.setPosition(location);
            }

            gmapServices.addListener(searchMarker, 'click', function () {
                searchInfowindow.open(gmapServices.map, searchMarker);
            });

            gmapServices.triggerEvent(searchMarker, 'click');

            workersLayerServices.showWorkersWithinBounds();
        }

        function clearVisuals () {
            if (searchMarker && searchMarker.getMap()) {
                gmapServices.hideMarker(searchMarker);
                searchInfowindow.close();
                workersLayerServices.hideMarkers();
            }
        }

        function placeChangeCallback() {
            var place = autocomplete.getPlace();

            if ( !place.geometry) {
                alert("Autocomplete's returned place contains no geometry");
                return;
            }

            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                gmapServices.map.fitBounds(place.geometry.viewport);
            } else {
                gmapServices.map.setCenter(place.geometry.location);
                gmapServices.map.setZoom(14);
            }

            showWorkers(place.geometry.location);
        }

    }
}());