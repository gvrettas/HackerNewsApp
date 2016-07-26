(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .factory('commonFunctions', commonFunctions);

    commonFunctions.$inject = ['$q'];

    /* @ngInject */
    function commonFunctions($q) {
        var service = {
            promiseErrorCallback: promiseErrorCallback
        };
        
        return service;

        ////////////////
        function promiseErrorCallback() { 
            return $q.reject(error);
        }
    }
})();
