angular.module('crmApp')
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push(function($rootScope) {
      return {
        request: function(config) {
          if (config.params && $rootScope.currentSession){
            config.params.sessionid = $rootScope.currentSession.sessionId;
          }
          return config;
        },
        response: function(response) {
           // same as above
          return response;
        }
      };
    });
}]);