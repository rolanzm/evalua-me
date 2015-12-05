app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'components/home/profile.view.html',
            controller: 'HomeCtrl'
        })
        .when('/exams/:id/', {
            templateUrl: 'components/make-exam/make-exam.view.html',
            controller: 'MakeExamCtrl'
        })
        .when('/exams/:id/take', {
            templateUrl: 'components/take-exam/take-exam.view.html',
            controller: 'MakeExamCtrl'
        })
        .when('/exams', {
            templateUrl: 'components/list-exams/list-exams.view.html',
            controller: 'ListExamsCtrl'
        })
        .when('/about/', {
            templateUrl: 'components/home/about.view.html',
            controller: 'HomeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
]);

app.controller('MenuCtrl', ['$scope', '$location', '$cookies',
function ($scope, $location, $cookies) {
  
  $scope.$on('$locationChangeSuccess', function( event ) { 
      $scope.currentModule = getModule(); 
  });

  function getModule() {
    var path = $location.path().toLowerCase().replace(/\/+$/, "");
    if (path.endsWith('/exams')) return 'exam-list';
    if (path.endsWith('/about')) return 'about';
    if (path === '') return 'home';
    return path;
  };

}]);