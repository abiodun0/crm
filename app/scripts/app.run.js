angular.module('crmApp')
    .run(function($rootScope, $state) {
      $rootScope.$on('$stateChangeSuccess', function(ev, to) {
        console.log($rootScope.currentSession);
        if (to.data.requiredLogin && !$rootScope.currentSession) {
            //$rootScope.logintext = "You have to be logged in to view that page";
            $state.go('index');
            ev.preventDefault();
        }
        if (!to.data.requiredLogin && $rootScope.currentSession) {

            $state.go('dashboard.home');
            ev.preventDefault();
        }
      });

      $rootScope.logout = function() {
        $rootScope.currentSession = {};
        $state.go('index');
      }

    });
