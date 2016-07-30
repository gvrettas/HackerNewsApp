(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .controller('StoriesController', StoriesController);

    StoriesController.$inject = ['storiesService', '$location', 'commonFunctions'];

    /* @ngInject */
    function StoriesController(storiesService, $location, commonFunctions) {
        var model = this;
        model.topStories = [];

        model.viewDetail = viewDetail;
        model.openUrl = commonFunctions.openUrl;

        initialise();

        ////////////////

        function initialise() {
        	var topStoriesPromise = storiesService.getTopStories();
        	topStoriesPromise.then(function(topStories) {
        		model.topStories = topStories;
        	});
        }

        function viewDetail(storyId) {
            var storyDetailUrl = 'stories/' + storyId + '/detail'; 
            $location.path(storyDetailUrl);
        }
    }
})();
