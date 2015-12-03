var app = angular.module('evalue-me', [
    'ngRoute'
    ,'ngLocationUpdate'
    ,'angular-loading-bar'
    ,'ngAnimate'
    ,'ui.bootstrap'
]);

app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.latencyThreshold = 100;
    cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>';
}]);

app.factory('http', ['$http', function($http) {
    var http = function() {
        var api = '/api/v1';
        
        this.get = function(url, callback) {
            return $http.get(api + url).then(
                function(response){
                    callback(response.status, response.data);
                },
                function(error){}
            );
        };
        
        this.post = function(url, data, callback) {
          return $http({
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
          return $http({
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