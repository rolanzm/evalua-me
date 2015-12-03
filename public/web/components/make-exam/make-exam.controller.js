app.controller('MakeExamCtrl', ['$scope', '$routeParams', '$q', 'http', '$location',
    function ($scope, $routeParams, $q, http, $location) {

        // [ exam data ]
        $scope.exam = {
            id: null,
            course: null,
            course_id: null,
            questions : []
        };
        $scope.currentQuestion  = null;
        // [ common data ]
        $scope.difficulties = [
            { name: 'Alto', id: 2 },
            { name: 'Medio', id: 1 },
            { name: 'Bajo', id: 0 }
        ];
        
        http.get('/courses', function(s,d) {
            $scope.courses = d;
        }).then(function(){
        
            if ($routeParams.id != 'new') {
                //TODO: loading by UI
                http.get('/exams/' + $routeParams.id, function(s, d){
                    $scope.exam = angular.extend($scope.exam, d);
                    $scope.setCourse(function(){
                        http.get('/exams/' + $routeParams.id + '/questions', function(sQ, dQ) {
                            
                            
                            $scope.exam.questions = dQ;
                            
                            for (var iQ = 0; iQ < dQ.length; iQ++) {
                                dQ[iQ].topic = $scope.topics.filter(function(t) { return t.id == dQ[iQ].topic_id;})[0];
                                dQ[iQ].difficulty = $scope.difficulties.filter(function(d) { return d.id == dQ[iQ].difficulty;})[0];
                            }
                            $scope.currentQuestion = $scope.exam.questions[0];
                            
                            //TODO: stop loading and show UI!!
                        });    
                    });
                    
                    
                });
            }
        });
        
        //TODO: review https://docs.angularjs.org/api/ngResource/service/$resource
        
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
        $scope.setCourse = function(callback) {
            if (!$scope.exam.course && $scope.exam.course_id) {
                $scope.exam.course = $scope.courses.filter(function(c) { return c.id == $scope.exam.course_id;})[0];
            } else {
                $scope.exam.course_id  = $scope.exam.course.id;
            }
            
             http.get('/courses/' + $scope.exam.course.id + '/topics', function(s, d) {
                $scope.topics = d;
                callback();
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
                difficulty : $scope.difficulties[1],
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
            
            //TODO: validate
            
            //Saving
            var e = $scope.exam;
            var deferred = $q.defer();
            _saveExam(e, function(ee) {
                
                for (var i = 0; i < ee.questions.length; i++) {
                    
                    var q = ee.questions[i];
                    
                    _saveQuestion(ee, q, function(qe,qq) {
                            if (qq.choices !== undefined) {
                                for (var j = 0; j < qq.choices.length; j++) {
                                    var c = qq.choices[j];
                                    _saveChoice(qe, qq, c,  function(ce,cq,cc){
                                            if (
                                                (ce.questions.indexOf(cq) == ce.questions.length-1) &&
                                                (cq.choices.indexOf(cc) == cq.choices.length-1)
                                            ) {
                                                deferred.resolve();
                                            }
                                    });
                                }
                            } else {
                                if (qe.questions.indexOf(qq) == qe.questions.length-1) {
                                    deferred.resolve();
                                }
                            }
                    });
                }
            });
            //continue...
            deferred.promise.then(function(xx){
                //https://github.com/anglibs/angular-location-update
                //BUG: this must change the URL without reload the controller.
                $location.update_path('/exams/' + e.id);
            });
        };
        
        var _saveExam = function(e, callback){
            if (e.id) {
                http.put('/exams/' + e.id, e,
                    function(sC, dC) {
                        callback(e);
                    }
                );
            } else {
                http.post('/exams', e,
                    function(sE, dE) {
                        e.id = dE.id;
                        callback(e);
                    }
                );
            }
        };
        var _saveQuestion  = function(e, q, callback){
            //transform
            var nq = {
                difficulty : q.difficulty.id,
                exam_id: e.id,
                statement: q.statement,
                topic_id: q.topic.id
            };
            if (q.id) {
                http.put('/exams/' + e.id + '/questions/' + q.id, nq,
                    function(sC, dC) {
                        callback(e,q);
                    }
                );    
            } else {
                http.post('/exams/' + e.id + '/questions', nq, 
                    function(sQ, dQ) {
                        q.id = dQ.id;
                        callback(e,q);
                    }
                );
            }
        };
        var _saveChoice  = function(e, q, c, callback){
            if (c.id) {
                http.put('/exams/' + e.id + '/questions/' + q.id + '/choices/' + c.id, c,
                    function(sC, dC) {
                        callback(e,q,c);
                    }
                );    
            } else {
                http.post('/exams/' + e.id + '/questions/' + q.id + '/choices', c,
                    function(sC, dC) {
                        c.id = dC.id;
                        callback(e,q,c);
                    }
                );
            }
        };

}]);