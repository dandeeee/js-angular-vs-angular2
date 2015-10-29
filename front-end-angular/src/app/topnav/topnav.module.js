(function () {
 'use strict';

 angular
     .module('topnavapp',['ngRoute', 'ngResource'])
     .config(TopNavAppRouts)
     .constant('config',AppConfig);

 TopNavAppRouts.$inject = ['$routeProvider'];

 function TopNavAppRouts($routeProvider) {
  $routeProvider
      .otherwise({templateUrl: '/app/topnav/topnav.html', title: 'topnav'});
 }
})();