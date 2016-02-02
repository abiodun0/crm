'use strict';

/**
 * @ngdoc function
 * @name crmApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the crmApp
 */
angular.module('crmApp')
  .controller('DashboardController', ['sales', '$scope', 'topSalesMenPerMonth',
    'topOrdersPerMonth', 'totalSalesmen', 'totalSalesPerMonth',
    function(sales, $scope, topSalesMenPerMonth, topOrdersPerMonth,
      totalSalesmen, totalSalesPerMonth) {
      $scope.salesData = [[]];
      $scope.salesLabel = Array.from(totalSalesPerMonth, function(x) {
        return x[0];
      });
      $scope.salesData[0] = Array.from(totalSalesPerMonth, function(x) {
        return x[1];
      });
      $scope.salesMenLabel = Array.from(totalSalesmen, function(x) {
        return x[0];
      });
      $scope.salesMenData = Array.from(totalSalesmen, function(x) {
        return x[1];
      });
      $scope.topSalesMen = topSalesMenPerMonth;
      $scope.topSalesOrders = topOrdersPerMonth.sort(function(a,b){
        return b[1] - a[1];
      });

      $scope.update = function(chat){
        switch(chat){
          case 'totolSalesMen':
            sales.getTotalSalesMen().then(function(res){
              $scope.salesMenLabel = Array.from(res, function(x) {
                return x[0];
              });
            $scope.salesMenData = Array.from(res, function(x) {
                return x[1];
            });
            })
          break;
          case 'totalSales':
            sales.getTotalSalesMen().then(function(res){
              $scope.salesLabel = Array.from(res, function(x) {
                return x[0];
              });
            $scope.salesData[0] = Array.from(res, function(x) {
                return x[1];
            });
            })
          break;
          case 'topFiveSalesMen':
           sales.getTopFiveSalesMen().then(function(res){
              $scope.topSalesMen = res;
              });

          break;
          case 'topFiveOrders':
            sales.getTopFiveOrders().then(function(res){
              $scope.topSalesOrders = res.sort(function(a,b){
                return b[1] - a[1];
              });
            });
          break
          default:
          alert('no appropriate action clicked');

        }
      }

  }]);
