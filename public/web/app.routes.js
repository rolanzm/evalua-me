app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider
        .when('/exams/:id/', {
            templateUrl: 'components/make-exam/make-exam.view.html',
            controller: 'MakeExamCtrl'
        })
        .when('/exams', {
            templateUrl: 'components/list-exams/list-exams.view.html',
            controller: 'ListExamsCtrl'
        })
        .otherwise({
            redirectTo: ''
        });
  }]);