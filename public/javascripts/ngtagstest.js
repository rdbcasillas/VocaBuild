var app = angular.module('plunker', ['ngTagsInput']);

app.controller('MainCtrl', function($scope, $q, $http) {
  //$scope.tags = [];

  $scope.loadTags = function() {
    var tags = $q.defer();
    return $http.get('/solution-two/data')
  }
  console.log($scope.tags);
});