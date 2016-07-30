(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .factory('loadingOverlayToggler', loadingOverlayToggler);

    loadingOverlayToggler.$inject = ['$rootScope'];

    /* @ngInject */
    function loadingOverlayToggler($rootScope) {
        var loadingCount = 0;

        var service = {
            showLoading: showLoading,
            hideLoading: hideLoading
        };
        
        return service;

        ////////////////
        function showLoading() { 
            loadingCount++;

            if (loadingCount === 1) {
                $rootScope.$broadcast('showLoadingOverlay');
            }
        }

        function hideLoading () {
            loadingCount--;

            if (loadingCount < 0) {
                loadingCount = 0;
            }

            if (loadingCount === 0) {
                $rootScope.$broadcast('hideLoadingOverlay');
            }
        }
    }
})();
