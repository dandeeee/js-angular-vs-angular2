(function () {
    'use strict';

    angular
        .module('itemsapp')
        .controller('itemsController', ItemsController);

    ItemsController.$inject = ['itemsService'];

    function ItemsController(service) {
        var vm = this;
        vm.pagetitle = 'Items!';
        vm.items = [];

        activate();

        function activate(){
            service.getAllItemsResource(
                function(data){
                    return vm.items = data
                }
            );
        }

    }
})();