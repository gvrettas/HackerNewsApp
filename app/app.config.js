(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .config(config)

    config.$inject = ['$mdThemingProvider'];

    function config ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('amber')
            .backgroundPalette('grey', {
                'default': '400',
                'hue-1': '200',
                'hue-2': '600',
                'hue-3': '300'
            });
    }
})();
