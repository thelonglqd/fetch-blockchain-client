'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1/:userid', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
    var userid = $routeParams.userid;
    var url = 'https://vast-taiga-64307.herokuapp.com/users/' + userid + '/orders';

    var loadOrderData = function () {
      $http.get(url)
        .then(function (response) {
          $scope.orders = response.data;
        });
    }

    loadOrderData();

    $scope.buybit = function () {
      $http.put(url, {
          size: $scope.size,
          bid: $scope.bid
        })
        .then(function (response) {
          loadOrderData();
        })
        .catch(function (error) {
          $window.alert(error.data.errorMessage);
        })
    }
  }]);