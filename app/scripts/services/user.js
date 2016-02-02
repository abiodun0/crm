'use strict';

/**
 * @ngdoc service
 * @name crmApp.user
 * @description
 * # user
 * Service in the crmApp.
 */
angular.module('crmApp')
  .service('user', ['$http', '$rootScope','$state', function($http, $rootScope, $state) {
    this.login = function(loginform) {
      $rootScope.errorMessage = '';
    $http({
      url: 'http://localhost:8080/login',
      method: 'GET',
      params: loginform
    })
    .then(function(resp) {
    if (resp.data.loginSucceeded){
        $rootScope.currentSession = resp.data;
        $rootScope.currentSession.username = loginform.username;
        $state.go('dashboard.home');
    }
        else {
          $rootScope.errorMessage = 'Login Failed. Try again';
        }
    });
  }

}]);
