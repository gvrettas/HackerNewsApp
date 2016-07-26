(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .controller('StoryDetailController', StoryDetailController);

    StoryDetailController.$inject = ['$routeParams', 'storyDetailService'];

    /* @ngInject */
    function StoryDetailController($routeParams, storyDetailService) {
        var model = this;
        model.storyDetail = {};

        initialise();

        ////////////////

        function initialise() { 
            var storyId = $routeParams.id;
            var storyDetailPromise = storyDetailService.getStoryWithComments(storyId);
            storyDetailPromise.then(function(storyDetail) {
                model.storyDetail = storyDetail;
            });
        }
    }
})();
