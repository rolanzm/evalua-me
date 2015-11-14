app.controller('MakeExamCtrl', ['$scope', '$routeParams', 'http', '$location',
    function ($scope, $routeParams, http, $location) {


        // [ common data ]
        http.get('/courses', function(s,d) {
            $scope.courses = d;
        });
        
        $scope.dificulties = ['Alto', 'Medio', 'Bajo'];
        
        // [ exam data ]
        
        $scope.exam = {
            id: null,
            course: null,
            course_id: null,
            questions : []
        };
        
        if ($routeParams.id != 'new') {
            http.get('/exams/' + $routeParams.id, function(s, d){
                $scope.exam = angular.extend($scope.exam, d);
                $scope.setCourse();
                
                //TODO: deferred loading by UI
                http.get('/exams/' + $routeParams.id + '/questions', function(sQ, dQ) {
                    $scope.exam.questions = dQ;    
                });
            });
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
            if (!$scope.exam.course && $scope.exam.course_id) {
                $scope.exam.course = $scope.courses.filter(function(c) { return c.id == $scope.exam.course_id;})[0];
            } else {
                $scope.exam.course_id  = $scope.exam.course.id;
            }
            
             http.get('/courses/' + $scope.exam.course.id + '/topics', function(s, d) {
                $scope.topics = d;
             });  
        };
        $scope.selectQuestion = function (question) {
            if (!question.loaded) {
                //TODO: loading...
                http.get('/exams/' + $scope.exam.id + '/questions/' + question.id + '/choices', function(sC, dC) {
                    question.choices = dC;
                    question.loaded = true;
                    
                    $scope.currentQuestion = question;
                });
            } else {
                $scope.currentQuestion = question;
            }
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

            var e = $scope.exam;
            
            _saveExam(e, function() {
                for (var i = 0; i < e.questions.length; i++) {
                    var q = e.questions[i];
                    _saveQuestion(e, q, function() {
                        for (var j = 0; j < q.choices.length; j++) {
                            var c = q.choices[j];
                            _saveChoice(e, q, c, function(){
                                
                            });
                        }
                    });
                }
                $location.update_path('/exams/' + e.id, false);
            });
        };
        
        var _saveExam = function(e, callback){
            if (e.id) {
                http.put('/exams/' + e.id, e,
                    function(sC, dC) {
                        callback();
                    }
                );
            } else {
                http.post('/exams', e,
                    function(sE, dE) {
                        e.id = dE.id;
                        callback();
                    }
                );
            }
        };
        var _saveQuestion  = function(e, q, callback){
            if (q.id) {
                http.put('/exams/' + e.id + '/questions/' + q.id, q,
                    function(sC, dC) {
                        callback();
                    }
                );    
            } else {
                http.post('/exams/' + e.id + '/questions', q, 
                    function(sQ, dQ) {
                        q.id = dQ.id;
                        callback();
                    }
                );
            }
        };
        var _saveChoice  = function(e, q, c, callback){
            if (c.id) {
                http.put('/exams/' + e.id + '/questions/' + q.id + '/choices/' + c.id, c,
                    function(sC, dC) {
                        callback();
                    }
                );    
            } else {
                http.post('/exams/' + e.id + '/questions/' + q.id + '/choices', c,
                    function(sC, dC) {
                        c.id = dC.id;
                        callback();
                    }
                );
            }
        };

}]);