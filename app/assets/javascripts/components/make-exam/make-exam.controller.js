app.controller('MakeExamCtrl', ['$scope', '$routeParams', '$http', '$location',
    function ($scope, $routeParams, $http, $location) {

        // [ common data ]
        $http.get('/api/v1/courses').then(
            function(response){
                $scope.courses = response.data;
            },
            function(error){}
        );

        $scope.dificulties = ['Alto', 'Medio', 'Bajo'];
        
        // [ exam data ]
        
        $scope.exam = {
            id: null,
            course: null,
            course_id: null,
            questions : []
        };
        
        if ($routeParams.id != 'new') {
            $http.get('/api/v1/exams/' + $routeParams.id).then(
                function(response){
                    $scope.exam = angular.extend($scope.exam, response.data);
                    $scope.setCourse();
                },
                function(error){}
            );
        }
        
        //TODO: review https://docs.angularjs.org/api/ngResource/service/$resource
        
        
        //temporal
        $scope.currentQuestion  = null;

        /*
        $scope.$watch("exam.course", function(newValue, oldValue) {
            debugger;
            if (newValue) {
              $http.get('/api/v1/courses/' + newValue.id + '/topics').then(
                    function(response){
                        $scope.topics = response.data;
                    },
                    function(error){}
                );  
            }
        });*/
        
        //functions
        $scope.setCourse = function() {
            if ($scope.exam.course == null) {
                $scope.exam.course = $scope.courses.filter(function(c) { return c.id == $scope.exam.course_id;})[0];
            }
            
             $http.get('/api/v1/courses/' + $scope.exam.course.id + '/topics').then(
                function(response){
                    $scope.topics = response.data;
                },
                function(error){}
            );  
        };
        $scope.selectQuestion = function (question) {
            console.log('selectQuestion');
            $scope.currentQuestion = question;
        };
        $scope.isQuestionSelected = function (q) {
            return q == $scope.currentQuestion;
        };
        $scope.addQuestion = function () {
            console.log('addQuestion');
            var q = {
                statement : '',
                dificulty : $scope.dificulties[0],
                choices : []
            };
            $scope.exam.questions.push(q);
            this.selectQuestion(q);
        };
        $scope.addChoice  = function () {
            console.log('addChoice');
            var c = {
                statement : '',
                selected : false
            };
            $scope.currentQuestion.choices.push(c);
        };
        
        
        $scope.save = function(){
            
            var req = {
                 method: 'POST',
                 url: '/api/v1/exams',
                 headers: {
                   'Content-Type': 'application/json'
                 },
                 data: {
                    id: $scope.exam.id,
                    name: $scope.exam.name,
                    course_id: $scope.exam.course.id
                }
            }
            
            if ($scope.exam.id) {
                req.method = 'PUT'; //update
                req.url ='/api/v1/exams/' + $scope.exam.id;
            } else {
                req.method = 'POST'; //create
            }

            $http(req).then(
                function(resp){
                    if (resp.status == 201) {
                        $location.path('/exams/' + resp.data.id);
                        //$scope.exam.id = resp.data.id;
                        //$scope.exam.name = resp.data.name;
                    }
                    console.log(resp);
                }, 
                function(){}
            );

        };

}]);