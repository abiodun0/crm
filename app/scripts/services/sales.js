'use strict';

/**
 * @ngdoc service
 * @name crmApp.sales
 * @description
 * # sales
 * Factory in the crmApp.
 */
angular.module('crmApp')
  .factory('sales',['$http', '$q', function($http, $q) {
    function getData(url){
      var deffered = $q.defer();
        $http({
          url: url,
          method: 'GET',
          params: {}
        }).then(function(res) {
          deffered.resolve(res.data.data);
        });
      return deffered.promise;
    }
    return {
      getTopFiveSalesMen: function() {
        return getData('http://localhost:8080/topsalesmen');
      },
      getTopFiveOrders: function() {
        return getData('http://localhost:8080/topsalesorders');
      },
      getTotalSalesMen: function() {
        return getData('http://localhost:8080/salesmandata');
      },
      getTotalOrders: function() {
        return getData('http://localhost:8080/lastyeardata');
      }
    };
  }]);
