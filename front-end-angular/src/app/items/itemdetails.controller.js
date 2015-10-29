(function () {
    'use strict';

    angular
        .module('itemsapp')
        .controller('itemDetailsController', ItemDetailsControler);

    ItemDetailsControler.$inject = ['$routeParams', 'itemsService'];

    function ItemDetailsControler($routeParams, service) {

        var vm = this;
        vm.item = null;

        activate();

        function activate(){
            service.getItemForIdResource(
                $routeParams.id,
                function(data){
                    return vm.item = data
                }
            );
        }
    }

})();