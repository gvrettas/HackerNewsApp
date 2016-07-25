(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .controller('StoryDetailController', StoryDetailController);

    StoryDetailController.$inject = [];

    /* @ngInject */
    function StoryDetailController() {
        var model = this;
        model.title = 'Story Detail';

        initialise();

        ////////////////

        function initialise() { }
    }
})();