(function () {
    'use strict';

    angular
        .module('demoApp', ['ngMaterial', 'ngAnimate', 'oitozero.ngSweetAlert', 'treasure-overlay-spinner', 'vAccordion'])

        .constant('BASE_URL', window.location.origin + '/EconDev')
        .constant('GOOGLE_API_KEY', 'AIzaSyDmng5sov5Ju5jmf5-RmjOTrqnekXpSkwc')
        .constant('LAYER_LIMIT', 4)

        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('red')
                .accentPalette('pink');
        });

}());

