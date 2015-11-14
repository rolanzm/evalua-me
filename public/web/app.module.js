var app = angular.module('evalue-me', [
    'ngRoute'
    ,'ngLocationUpdate'
]);

app.factory('http', ['$http', function($http) {
    var http = function() {
        var api = '/api/v1';
        
        this.get = function(url, callback) {
            $http.get(api + url).then(
                function(response){
                    callback(response.status, response.data);
                },
                function(error){}
            );
        };
        
        this.post = function(url, data, callback) {
          $http({
            method: 'POST',
            url: api + url,
            headers: {
              'Content-Type': 'application/json'
           },
           data: data
          }).then(function(response) {
              callback(response.status, response.data);
          });
        };
        
        this.put = function(url, data, callback) {
          $http({
            method: 'PUT',
            url: api + url,
            headers: {
              'Content-Type': 'application/json'
           },
           data: data
          }).then(function(response) {
              callback(response.status, response.data);
          });
        };
    } 
    return new http();
}]);