(function () {
    'use strict';

    angular
        .module('topnavapp')
        .controller('topNavController', TopNavController);

    TopNavController.$inject = ['$route'];

    function TopNavController($route) {
        var vm = this;

        vm.isCurrent = function isCurrent(r) {
            var title = $route.current.title;
            return (title == null) ? false : title.substr(0, r.length) === r;
        }
    }
})();