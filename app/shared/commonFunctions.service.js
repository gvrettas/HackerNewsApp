(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .factory('commonFunctions', commonFunctions);

    commonFunctions.$inject = ['$q', '$window'];

    /* @ngInject */
    function commonFunctions($q, $window) {
        var service = {
            promiseErrorCallback: promiseErrorCallback,
            openUrl: openUrl
        };
        
        return service;

        ////////////////
        function promiseErrorCallback() { 
            return $q.reject(error);
        }

        function openUrl(url) {
            $window.open(url, '_blank');
        }
    }
})();
