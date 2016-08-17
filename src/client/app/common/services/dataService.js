(function() {
    'use strict';

    function dataService($http) {
        var service = {
            getCatalogs: getCatalogs,
            getProductKeysByCategory: getProductKeysByCategory
        }
        return service;

        var urlRoot = "http://127.0.0.1";
        function getCatalogs() {
            return $http({ method: 'GET', url: urlRoot + '/getCatalogs'})
            .then(function(data, status, headers, config) {
                console.log(data);
                return data.data;
            }, function(error){
                console.log(error);
                return error;
            });
        }

        function getProductKeysByCategory(catalog_id, category_id) {
            return $http({ method: 'GET', url: urlRoot + '/getProductKeysByCategory/'+ catalog_id+'/'+ category_id})
            .then(function(data, status, headers, config) {
                console.log(data);
                return data.data;
            }, function(error){
                console.log(error);
                return error;
            });
        }
    }

    angular.module('common.services.data', [])
        .factory('DataService', ['$http',dataService]);
})();
