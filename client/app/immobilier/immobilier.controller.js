'use strict';

angular.module('wallprojectApp')
  .controller('ImmobilierCtrl', function ($scope,$http,socket) {


    $http.get('/api/ads').success(function(ads) {
      $scope.ads = ads;
 
      // Update array with any new or deleted items pushed from the socket
      socket.syncUpdates('ad', $scope.ads, function(event, ad, ads) {

        ads.sort(function(a, b) {
          a = new Date(a.date);
          b = new Date(b.date);
          return a>b ? -1 : a<b ? 1 : 0;
        });
      });
    });


 	$scope.$on('$destroy', function () {
      socket.unsyncUpdates('ad');
    });

  $scope.deleteAd =function(ad){
    $http.delete('/api/ads/' + ad._id);
  };

     $scope.addAd = function() {
      $http.post('/api/ads', $scope.newAd);
      console.log($scope.newAd);
      $scope.newAd = '';
    };




  });
