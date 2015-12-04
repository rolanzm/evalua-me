var app = angular.module('evalue-me', [
    'ngRoute'
    ,'ngLocationUpdate'
    ,'angular-loading-bar'
    ,'ngAnimate'
    ,'ui.bootstrap'
]);

app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 100;
    cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>';
}]);

//Fix ui-bootstrap
// app.config(function($provide) {
//   $provide.decorator('tabDirective', function($delegate) {
//     //we now get an array of all the datepickerDirectives, 
//     //and use the first one
//     $delegate[0].templateUrl = 'template/url.html';
//     return $delegate;
//   });
// });

//custom http client
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
