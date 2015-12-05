app.controller('MakeExamCtrl', ['$scope', '$routeParams', '$q', 'http', '$location', '$cookies', 'afterLoad',
    function ($scope, $routeParams, $q, http, $location, $cookies, afterLoad) {
        
        $scope.profile = $cookies.get('profile');
        if ($scope.profile == null) {
            $location.path('/');
            return;
        }
        

        //not allowed to change
        if ($scope.profile !== 'teacher' && !$location.path().toLowerCase().endsWith('/take')) {
            $location.path('/exams');
            return;
        }
        
        // [ exam data ]
        $scope.exam = {
            id: null,
            course: null,
            course_id: null,
            questions : []
        };
        $scope.currentQuestion  = null;
        $scope.currentQuestionNumber = 0;
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

                http.get('/exams/' + $routeParams.id, function(s, d){
                    $scope.exam = angular.extend($scope.exam, d);
                    $scope.setCourse(function(){
                        http.get('/exams/' + $routeParams.id + '/questions', function(sQ, dQ) {
                            
                            $scope.exam.questions = dQ;
                            
                            for (var iQ = 0; iQ < dQ.length; iQ++) {
                                dQ[iQ].topic = $scope.topics.filter(function(t) { return t.id == dQ[iQ].topic_id;})[0];
                                dQ[iQ].difficulty = $scope.difficulties.filter(function(d) { return d.id == dQ[iQ].difficulty;})[0];
                            }
                            $scope.selectQuestion(0);
                        });    
                    });
                });
            }
        });
        
        //functions
        $scope.setCourse = function(callback) {
            if (!$scope.exam.course && $scope.exam.course_id) {
                $scope.exam.course = $scope.courses.filter(function(c) { return c.id == $scope.exam.course_id;})[0];
            } else {
                $scope.exam.course_id  = $scope.exam.course.id;
            }
            
             http.get('/courses/' + $scope.exam.course.id + '/topics', function(s, d) {
                $scope.topics = d;
                if (callback) { callback();}
             });
        };
        $scope.selectQuestion = function (questionIndex) {
            var question = null; 
            if (isNaN(questionIndex)) {
                //Must be an object
                question = questionIndex; //as object
                $scope.currentQuestionNumber = $scope.exam.questions.indexOf(question) + 1;
            } else {
                question = $scope.exam.questions[questionIndex];
                $scope.currentQuestionNumber = questionIndex + 1;
            }
            
            question.active = true;
            
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
       
        $scope.addQuestion = function (a,b,c) {
            var q = {
                statement : '',
                difficulty : $scope.difficulties[1],
                choices : [],
                loaded : true,
                topic : $scope.topics[0]
            };
            $scope.exam.questions.push(q);
            $scope.selectQuestion(q);
            
            afterLoad(function() {
                $scope.$broadcast('question-added');
            });
            
        };
        
        $scope.addChoice  = function () {
            var c = {
                statement : '',
                selected : false
            };
            $scope.currentQuestion.choices.push(c);
            
            afterLoad(function() {
                $scope.$broadcast('choice-added');
            });
            
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