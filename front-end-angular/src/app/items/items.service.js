(function () {
    'use strict';

    angular
        .module('itemsapp')
        .factory('itemsService', ItemsService);

    ItemsService.$inject = ['$resource', 'config'];

    function ItemsService($resource, config) {

        var service = {
            getAllItemsResource : getAllItemsResource,
            getItemForIdResource : getItemForIdResource
        };

        return service;

        function getAllItemsResource(cb) {
            return $resource(config.backend.host + config.backend.itemsUrl)
                .query(cb);
        }

        function getItemForIdResource(id,cb){
            return $resource(config.backend.host + config.backend.itemForIdUrl,{id:'@id'})
                .get({'id':id}, cb);
        }


    }
})();