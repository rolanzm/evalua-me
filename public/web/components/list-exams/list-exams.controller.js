app.controller('ListExamsCtrl', ['$scope', '$routeParams', 'http', '$location',
function ($scope, $routeParams, http, $location) {

  $scope.exams = [];

  http.get('/exams', function(s,d) {
    $scope.exams = d;
  });
  
}]);