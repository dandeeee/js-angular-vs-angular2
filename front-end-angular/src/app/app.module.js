(function () {
    'use strict';

    angular
        .module('app', ['topnavapp', 'itemsapp','ngAnimate'])
        .config(AppRouts)
        .constant('config',AppConfig);

    AppRouts.$inject = ['$routeProvider'];

    function AppRouts($routeProvider) {
        $routeProvider
            .otherwise({redirectTo: '/'});
    }

})();