app.controller('ListExamsCtrl', ['$scope', '$routeParams', 'http', '$location', '$cookies',
function ($scope, $routeParams, http, $location, $cookies) {

  $scope.profile = $cookies.get('profile');
  if ($scope.profile == null) {
      $location.path('/');
      return;
  }
  
  $scope.exams = [];

  http.get('/exams', function(s,d) {
    $scope.exams = d;
  });
  
}]);