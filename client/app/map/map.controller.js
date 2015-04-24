'use strict';

angular.module('wallprojectApp')
  .controller('MapCtrl', function ($scope) {

  	// $scope.position = null;
  	

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function(position){
    //     $scope.$apply(function(){


    //               var mapOptions = {
    //                 center: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
    //                 zoom: 15
    //               };
    //               var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
                 
    //              var myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    //              var marker = new google.maps.Marker({
    //                   position: myLatlng,
    //                   map: map,
    //                   title: 'Hello World!'
    //               });

    //              $('#map-canvas').dimmer('hide');

		  //         $scope.position = {
		  //           'longitude':position.coords.longitude,
		  //           'latitude':position.coords.latitude
		  //         };
    //     });
    //   });
    // }



	$('#map_canvas').dimmer('show');

	$scope.map = null;


    $scope.options = {
      scrollwheel: false
    };


    $scope.randomMarkers = [];

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        $scope.$apply(function(){
        	$('#map_canvas').dimmer('hide');


			    var myposition = {
			    	id:'myposition',
			        latitude: position.coords.latitude,
			        longitude: position.coords.longitude,
			        title: 'my positio',
			        'options' :{
			        	'animation' : 1		        	
			        }
			      };

			   	$scope.map.center.latitude = position.coords.latitude;
			    $scope.map.center.longitude = position.coords.longitude;
			    $scope.randomMarkers.push(myposition);



	        });
	    });
 	 }

	$scope.map = {
      center: {
        latitude: null,
        longitude: null
      },
      zoom: 15,
      bounds: {}
    };

    $scope.createMarkers = function(){
    	var lat_min = $scope.map.bounds.southwest.latitude,
        lat_range = $scope.map.bounds.northeast.latitude - lat_min,
        lng_min = $scope.map.bounds.southwest.longitude,
        lng_range = $scope.map.bounds.northeast.longitude - lng_min;
        var array_rdm = [];
        for (var i = 0; i < 1000; i++) {
           	var latitude = lat_min + (Math.random() * lat_range);
      		var longitude = lng_min + (Math.random() * lng_range);

      		var position_rdm = {
			    	id:'myposition'+$scope.randomMarkers.length+i,
			        latitude: latitude,
			        longitude: longitude,
			        title: 'test'
			};
			array_rdm[i]=position_rdm;
        }
        $scope.randomMarkers = $scope.randomMarkers.concat(array_rdm);
        console.log($scope.randomMarkers.length);
        console.log($scope.randomMarkers);
    }


    // 
    // // Get the bounds from the map once it's loaded
    // $scope.$watch(function() {
    //   return $scope.map.bounds;
    // }, function(nv, ov) {
    //   // Only need to regenerate once
    //   if (!ov.southwest && nv.southwest) {
    //     //var markers = [];
    //     for (var i = 0; i < 20; i++) {
    //       markers.push(createRandomMarker(i, $scope.map.bounds))
    //     }
    //     $scope.randomMarkers = markers;
    //   }
    // }, true);


  });
