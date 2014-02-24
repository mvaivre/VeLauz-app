var module = angular.module('map_main_controller',['ionic']);


//document.addEventListener("deviceready", createMap, false); //to work with PhoneGap (hopefully)


//The application main controller
module.controller('mapMainController', ['$scope', function($scope, Plateform) {
// The main controller creates the OpenLayers map object. The map object
// is central, as most directives/components need a reference to it.

	ionic.Platform.ready(function createMap() { //to work with PhoneGap (hopefully)
		
		var map = new ol.Map({
		    layers: [
		      new ol.layer.Tile({
		        source: new ol.source.OSM()
		      })
		    ],
		    renderer: 'canvas',
		    view: new ol.View2D({
		      center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
		      zoom: 7
		    }),
		    ol3Logo: false
		});

		return map;
	});

  $scope.map = createMap();

}]);



