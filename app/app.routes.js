(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
    	$routeProvider.when('/stories', {
			templateUrl: 'stories/stories.html',
			controller: 'StoriesController',
			controllerAs: 'model'
		});

        $routeProvider.when('/stories/:id/detail', {
            templateUrl: 'storyDetail/storyDetail.html',
            controller: 'StoryDetailController',
            controllerAs: 'model'
        });

		$routeProvider.otherwise({redirectTo: '/stories'});
    }

})();
