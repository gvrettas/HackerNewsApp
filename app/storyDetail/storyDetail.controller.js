(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .controller('StoryDetailController', StoryDetailController);

    StoryDetailController.$inject = ['$routeParams', '$location', 'storyDetailService', 'commonFunctions'];

    /* @ngInject */
    function StoryDetailController($routeParams, $location, storyDetailService, commonFunctions) {
        var model = this;
        model.storyDetail = {};

        model.viewTopStories = viewTopStories;
        model.openUrl = commonFunctions.openUrl;

        initialise();

        ////////////////

        function initialise() { 
            var storyId = $routeParams.id;
            var storyDetailPromise = storyDetailService.getStoryWithComments(storyId);
            storyDetailPromise.then(function(storyDetail) {
                model.storyDetail = storyDetail;
            });
        }

        function viewTopStories() {
            var storiesUrl = 'stories'; 
            $location.path(storiesUrl);
        }
    }
})();
