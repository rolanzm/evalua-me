#!/bin/bash

#### reiniciar la DB
rake db:drop db:create db:migrate
#
./rest.sh POST /courses '{"name":"Course 1"}'
./rest.sh POST /courses '{"name":"C2"}'
./rest.sh PUT /courses/2 '{"name":"Course 2"}'
./rest.sh POST /courses '{"name":"C3"}'
./rest.sh DELETE /courses/3
./rest.sh GET /courses
#
./rest.sh POST /courses/1/topics '{"name":"C1-Topic 1"}'
./rest.sh POST /courses/1/topics '{"name":"C1-Topic 2"}'
./rest.sh POST /courses/2/topics '{"name":"C2-Topic 3xx"}'
./rest.sh POST /courses/2/topics '{"name":"C2-Topic 4--"}'
./rest.sh PUT /courses/2/topics/3 '{"name":"C2-Topic 3"}'
./rest.sh DELETE /courses/2/topics/4
./rest.sh GET /courses/1/topics
./rest.sh GET /courses/2/topics
#
./rest.sh POST /exams '{"name":"Exam 1 - C1","course_id":1}'
./rest.sh POST /exams '{"name":"Exam 2 - C1","course_id":1}'
./rest.sh POST /exams '{"name":"Exam 3 - C2xx","course_id":2}'
./rest.sh POST /exams '{"name":"Exam 4 - C2","course_id":2}'
./rest.sh PUT /exams/3 '{"name":"Exam 3 - C2","course_id":2}'
./rest.sh DELETE /exams/4
./rest.sh GET /exams
#
./rest.sh POST /exams/1/questions '{"topic_id":1,"difficulty":1,"statement":"Question 1"}'
./rest.sh POST /exams/1/questions '{"topic_id":2,"difficulty":2,"statement":"Question 2"}'
./rest.sh POST /exams/1/questions '{"topic_id":2,"difficulty":3,"statement":"Question 3"}'
./rest.sh POST /exams/2/questions '{"topic_id":3,"difficulty":4,"statement":"Question 4xx"}'
./rest.sh POST /exams/2/questions '{"topic_id":3,"difficulty":1,"statement":"Question 5--"}'
./rest.sh PUT /exams/2/questions/4 '{"topic_id":3,"difficulty":1,"statement":"Question 4"}'
./rest.sh DELETE /exams/2/questions/5
./rest.sh GET /exams/1/questions
#
./rest.sh POST /exams/1/questions/1/choices '{"statement":"Question 1 - Choice 1"}'
./rest.sh POST /exams/1/questions/1/choices '{"statement":"Question 1 - Choice 2","selected":true}'
./rest.sh POST /exams/1/questions/2/choices '{"statement":"Question 2 - Choice 3"}'
./rest.sh POST /exams/1/questions/2/choices '{"statement":"Question 2 - Choice 4","selected":true}'
./rest.sh POST /exams/2/questions/4/choices '{"statement":"Question 4 - Choice 5xx"}'
./rest.sh POST /exams/2/questions/4/choices '{"statement":"Question 4 - Choice 6--","selected":true}'
./rest.sh PUT /exams/2/questions/4/choices/5 '{"statement":"Question 4 - Choice 5","selected":true}'
./rest.sh DELETE /exams/2/questions/4/choices/6
./rest.sh GET /exams/1/questions/1/choices
#
# -- custom --
#./rest.sh GET /students
#./rest.sh POST /students/1/exams/1 '{"date":"2015-11-01"}'
#./rest.sh DELETE /students/1/exams/1 '{"date":"2015-11-01"}'
#./rest.sh GET /students/1/exams
#./rest.sh GET /students/1/exams/1
#./rest.sh PUT /students/1/exams/1/results
#./rest.sh GET /students/1/exams/1/results
