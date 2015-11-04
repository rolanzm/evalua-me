var app = angular.module('evalue-me', [
    'ngRoute'
    //,'ngMaterial'
]);

    app.config(['$routeProvider',
      function ($routeProvider) {
          $routeProvider
            .when('/exam/new/', {
                templateUrl: 'assets/components/make-exam/make-exam.view.html',
                controller: 'MakeExamCtrl'
            })
            .otherwise({
                redirectTo: ''
            });
      }]);