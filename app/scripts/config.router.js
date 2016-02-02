angular.module('crmApp')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider
        .otherwise('/');
      $stateProvider
        .state('index', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainController',
          data: {
            requiredLogin: false
          }
        })
        .state('dashboard', {
          abstract: true,
          url: '/dashboard',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardController',
          resolve: {
            topSalesMenPerMonth: function(sales) {
              return sales.getTopFiveSalesMen().then(function(res) {
                console.log(res);
                return res;
              });
            },
            topOrdersPerMonth: function(sales) {
              return sales.getTopFiveOrders().then(function(res) {
                return res;
              });
            },
            totalSalesmen: function(sales) {
              return sales.getTotalSalesMen().then(function(res) {
                return res;
              });
            },
            totalSalesPerMonth: function(sales){
              return sales.getTotalOrders().then(function(res){
                return res;
              });
            }
          },
          data: {
            requiredLogin: true
          }
        })
        .state('dashboard.home', {
          url: '/dashboard/home',
          templateUrl: 'views/partials/home.html'
        })
        .state('dashboard.totalSales', {
          url: '/dashboard/total-sales',
          templateUrl: 'views/partials/total-sales.html'
        })
        .state('dashboard.topFiveOrders', {
          url: '/dashboard/top-five-orders',
          templateUrl: 'views/partials/top-five-orders.html'
        })
        .state('dashboard.topFiveSalesMen', {
          url: '/dashboard/top-five-sales-men',
          templateUrl: 'views/partials/top-five-sales-men.html'
        })
        .state('dashboard.totalSalesMen', {
          url: '/dashboard/total-sales-men',
          templateUrl: 'views/partials/total-sales-men.html'
        });
      $locationProvider.html5Mode(true);
    }]);
