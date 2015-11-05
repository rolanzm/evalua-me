var app = angular.module('evalue-me', [
    'ngRoute'
    //,'ngMaterial'
]);

    app.config(['$routeProvider',
      function ($routeProvider) {
          $routeProvider
            .when('/exams/:id/', {
                templateUrl: 'assets/components/make-exam/make-exam.view.html',
                controller: 'MakeExamCtrl'
            })
            .otherwise({
                redirectTo: ''
            });
      }]);