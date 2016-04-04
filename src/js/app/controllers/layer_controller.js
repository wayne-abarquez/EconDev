(function () {
    'use strict';

    angular.module('demoApp')
        .controller('layerController', ['gmapServices',
            'winJobLayerServices', 'collegesLayerServices', 'railroadsLayerServices',
            'planningDistrictLayerServices', 'transmissionLinesLayerServices',
            'toxicLayerServices', 'heatmapsLayerServices', layerController]);

    function layerController(gmapServices,
                             winJobLayerServices, collegesLayerServices,
                             railroadsLayerServices, planningDistrictLayerServices,
                             transmissionLinesLayerServices, toxicLayerServices, heatmapsLayerServices) {
        var vm = this;

        vm.gaslayer = null;
        vm.transmissionlayer = null;

        vm.riverLayer = null;

        vm.toxicLayer = null;
        vm.undergroundLayer = null;

        var opts = {
            styleId: 2,
            templateId: 2
        };

        vm.layers = [
            {
                label: 'Heatmaps',
                selected: false,
                action: '',
                children: [
                    {
                        label: 'Welders',
                        selected: false,
                        action: 'layerCtl.toggleWeldersLayer()'
                    },
                    {
                        label: 'Engineers',
                        selected: false,
                        action: 'layerCtl.toggleEngineersLayer()'
                    },
                    {
                        label: 'Machinists',
                        selected: false,
                        action: 'layerCtl.toggleMachinistsLayer()'
                    }
                ]
            },
            {
                label: 'Utility',
                selected: false,
                action: '',
                children: [
                    {
                        label: 'Gas Lines',
                        selected: false,
                        action: 'layerCtl.toggleGasLinesLayer()'
                    },
                    {
                        label: 'Transmission Lines',
                        selected: false,
                        action: 'layerCtl.toggleTransmissionLinesLayer()'
                    }
                ]
            },
            {
                label: 'Transportation',
                selected: false,
                action: '',
                children: [
                    {
                        label: 'Rivers',
                        selected: false,
                        action: 'layerCtl.toggleRiverLayer()'
                    },
                    {
                        label: 'Railroads',
                        selected: false,
                        action: 'layerCtl.toggleRailroadLayer()'
                    }
                ]
            },
            {
                label: 'Specialized Sites',
                selected: false,
                action: '',
                children: [
                    {
                        label: 'Toxic Release',
                        selected: false,
                        action: 'layerCtl.toggleToxicLayer()'
                    },
                    {
                        label: 'Underground Storage',
                        selected: false,
                        action: 'layerCtl.toggleUndergroundLayer()'
                    }
                ]
            },
            {
                label: 'Colleges',
                action: 'layerCtl.toggleCollegesLayer()',
                selected: false
            },
            {
                label: 'Planning Districts',
                action: 'layerCtl.togglePlanningDistrictLayer()',
                selected: false
            },
            {
                label: 'WIN Job Centers',
                action: 'layerCtl.toggleWinJobLayer()',
                selected: false
            }
        ];

        /* Heatmaps */
        vm.toggleWeldersLayer = toggleWeldersLayer;
        vm.toggleEngineersLayer = toggleEngineersLayer;
        vm.toggleMachinistsLayer = toggleMachinistsLayer;

        vm.toggleGasLinesLayer = toggleGasLinesLayer;
        vm.toggleTransmissionLinesLayer = toggleTransmissionLinesLayer;

        vm.toggleRiverLayer = toggleRiverLayer;
        vm.toggleRailroadLayer = toggleRailroadLayer;

        vm.toggleToxicLayer = toggleToxicLayer;
        vm.toggleUndergroundLayer = toggleUndergroundLayer;

        vm.toggleCollegesLayer = toggleCollegesLayer;
        vm.togglePlanningDistrictLayer = togglePlanningDistrictLayer;
        vm.toggleWinJobLayer = toggleWinJobLayer;


        function toggleWeldersLayer () {
            if (vm.layers[0].children[0].selected) {
                heatmapsLayerServices.showWeldersLayer();
            } else {
                heatmapsLayerServices.hideWeldersLayer();
            }
        }

        function toggleEngineersLayer() {
            if (vm.layers[0].children[1].selected) {
                heatmapsLayerServices.showEngineersLayer();
            } else {
                heatmapsLayerServices.hideEngineersLayer();
            }
        }

        function toggleMachinistsLayer() {
            if (vm.layers[0].children[2].selected) {
                heatmapsLayerServices.showMachinistsLayer();
            } else {
                heatmapsLayerServices.hideMachinistsLayer();
            }
        }

        function toggleGasLinesLayer () {
            var layerId = '1zy5CqOy5SUHibjhQG3xhY98sHl6uR97f6-9ms-JB';
            if (vm.layers[1].children[0].selected) {
                vm.gaslayer = loadFusionLayer(layerId);
            } else {
                gmapServices.hideFusionTableLayer(vm.gaslayer);
            }
        }

        function toggleTransmissionLinesLayer () {
            //var layerId = '1nWMs04er0uWUz1KcdCNYjDw5Z4tzM5qK9tNSUqHZ';

            if (vm.layers[1].children[1].selected) {
                transmissionLinesLayerServices.showLayer();
                //vm.transmissionlayer = loadFusionLayer(layerId);
            } else {
                transmissionLinesLayerServices.hideLayer();

                //gmapServices.hideFusionTableLayer(vm.transmissionlayer);
            }
        }

        function toggleRiverLayer () {
            var layerId = '1u90CK69AYaG1w1dMUj0m-bfx3tVxShfMv-LHx_FY';

            if (vm.layers[2].children[0].selected) {
                vm.riverLayer = loadFusionLayer(layerId);
            } else {
                gmapServices.hideFusionTableLayer(vm.riverLayer);
            }
        }

        function toggleRailroadLayer () {
            if (vm.layers[2].children[1].selected) {
                railroadsLayerServices.showLayer();
            } else {
                railroadsLayerServices.hideLayer();
            }
        }

        function toggleToxicLayer () {
            if (vm.layers[3].children[0].selected) {
                toxicLayerServices.showLayer();
            } else {
                toxicLayerServices.hideLayer();
            }
        }

        function toggleUndergroundLayer() {
            var layerId = '1fsXuIUhpACqdco8Ie2hoLko5_f8djMvUFQyUe5LX';

            if (vm.layers[3].children[1].selected) {
                vm.undergroundLayer = loadFusionLayer(layerId);
            } else {
                gmapServices.hideFusionTableLayer(vm.undergroundLayer);
            }
        }

        function toggleCollegesLayer() {
            //var layerId = '1DBXHYncEqex1exXADFCXAldoQWhdzuiN4roqMEQr';

            if (vm.layers[4].selected) {
                collegesLayerServices.showLayer();
                //vm.collegesLayer = loadFusionLayer(layerId);
            } else {
                collegesLayerServices.hideLayer();
                //gmapServices.hideFusionTableLayer(vm.collegesLayer);
            }
        }

        function togglePlanningDistrictLayer() {
            //var layerId = '1m49m8v7FqvcbMabd4rkwnzo3aRAn1sweXGyngIZ1';

            if (vm.layers[5].selected) {
                planningDistrictLayerServices.showLayer();
            } else {
                planningDistrictLayerServices.hideLayer();
            }
        }

        function toggleWinJobLayer() {
            if (vm.layers[6].selected) {
                winJobLayerServices.showLayer();
            } else {
                winJobLayerServices.hideLayer();
            }
        }

        /* Non Scope Functions here */

        function loadFusionLayer(layerId) {
            return gmapServices.loadFusionTableLayer('geometry', layerId, opts);
        }

    }
}());