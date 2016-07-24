(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .controller('StoriesController', StoriesController);

    StoriesController.$inject = [];

    /* @ngInject */
    function StoriesController() {
        var model = this;
        model.title = 'StoriesController';

        initialise();

        ////////////////

        function initialise() {
        }
    }
})();
