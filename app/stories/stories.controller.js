(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .controller('StoriesController', StoriesController);

    StoriesController.$inject = ['storiesService'];

    /* @ngInject */
    function StoriesController(storiesService) {
        var model = this;
        model.topStories = [];

        initialise();

        ////////////////

        function initialise() {
        	var topStoriesPromise = storiesService.getTopStories();
        	topStoriesPromise.then(function(topStories) {
        		model.topStories = topStories;
        	});
        }
    }
})();
