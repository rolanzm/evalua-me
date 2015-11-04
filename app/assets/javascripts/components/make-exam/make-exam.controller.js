app.controller('MakeExamCtrl', ['$scope', '$http',
    function ($scope, $http) {

        //curent exam
        $scope.exam = {
            code: 'A-001',
            course: null,
            course_id: null,
            questions : []
        };
        
        //TODO: review https://docs.angularjs.org/api/ngResource/service/$resource
        $http.get('/api/v1/courses').then(
            function(response){
                $scope.courses = response.data;
            },
            function(error){}
        );

        $scope.dificulties = ['Alto', 'Medio', 'Bajo'];
        
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
            console.log("saved!");
        };

}]);