'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$location', '$http', '$window', function($scope, $location, $http, $window) {
  $scope.login = function () {
    $http.post('https://vast-taiga-64307.herokuapp.com/login', { username: $scope.username, password: $scope.password })
      .then(function (response) {
        console.log('response: ', response);
        $location.path('/view1/' + response.data[0].id);
      })
      .catch(function (error) {
        $window.alert(error.data.errorMessage);
      })
  }
}]);