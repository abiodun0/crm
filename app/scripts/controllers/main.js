'use strict';

/**
 * @ngdoc function
 * @name crmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crmApp
 */
angular.module('crmApp')
  .controller('MainController', ['$scope', 'user',
    function($scope, user) {
      $scope.login = function(loginform){
        user.login(loginform);
      };
    }
  ]);
