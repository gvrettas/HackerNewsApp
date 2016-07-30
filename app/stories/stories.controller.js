(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .controller('StoriesController', StoriesController);

    StoriesController.$inject = ['storiesService', '$location', '$window'];

    /* @ngInject */
    function StoriesController(storiesService, $location, $window) {
        var model = this;
        model.topStories = [];

        model.viewDetail = viewDetail;
        model.openUrl = openUrl;

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

        function openUrl(url) {
            $window.open(url, '_blank');
        }
    }
})();
