(function () {
    'use strict';

    angular
        .module('itemsapp',['ngRoute', 'ngResource'])
        .config(ItemsAppRouts)
        .constant('config',AppConfig);

    ItemsAppRouts.$inject = ['$routeProvider'];

    function ItemsAppRouts($routeProvider) {
        $routeProvider
        .when('/itemspage',{templateUrl: '/app/items/items.html', title: 'itemspage'})
        .when('/item/:id',{templateUrl: '/app/items/itemdetails.html', title: 'detailsspage'})
        .otherwise({templateUrl: '/app/items/items.html', title: 'itemspage'});
    }

})();