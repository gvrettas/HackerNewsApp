(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .directive('hnLoadingOverlay', hnLoadingOverlay);

    hnLoadingOverlay.$inject = ['$rootScope', '$document'];

    /* @ngInject */
    function hnLoadingOverlay($rootScope, $document) {
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl: 'loading/loadingOverlay.html'
        };

        return directive;
        
        function link(scope, element, attrs) {
            $rootScope.$on('showLoadingOverlay', onShowOverlay);
            $rootScope.$on('hideLoadingOverlay', onHideOverlay);

            var bodyElem = angular.element($document).find('body');

            function onShowOverlay () {
                scope.isLoading = true;
                bodyElem.addClass('loadingVisible');
            }

            function onHideOverlay () {
                scope.isLoading = false;
                bodyElem.removeClass('loadingVisible');
            }
        }
    }
})();
