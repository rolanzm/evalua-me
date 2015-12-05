app.controller('HomeCtrl', ['$scope', '$location', '$cookies',
function ($scope, $location, $cookies) {
  
  $scope.loginStudent = function(){
    $cookies.put('profile', 'student');
    redirect();
  };
  
  $scope.loginTeacher  = function(){
    $cookies.put('profile', 'teacher');
    redirect();
  };
  
  function redirect() {
    $location.path('/exams');
  };

}]);