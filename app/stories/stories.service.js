(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .factory('storiesService', storiesService);

    storiesService.$inject = ['$http', '$q', 'hackernewsBaseUrl', 'hackernewsUrlSuffix', 'commonFunctions', 'storyDetailService', '_', 'loadingOverlayToggler'];

    /* @ngInject */
    function storiesService($http, $q, hackernewsBaseUrl, hackernewsUrlSuffix, commonFunctions, storyDetailService, _, loadingOverlayToggler) {
        var topStoriesUrl = hackernewsBaseUrl + 'topstories' + hackernewsUrlSuffix;

        var service = {
            getTopStories: getTopStories
        };

        return service;

        ////////////////
        function getTopStories() {
            loadingOverlayToggler.showLoading();
        	var storyIdsPromise = getTopStoriesIds();
        	
    		return storyIdsPromise.then(function(storyIds) {
    			var storyDetailPromises = getTopStoriesDetails(storyIds);
    			return $q.all(storyDetailPromises);
    		}, commonFunctions.promiseErrorCallback)

    		.then(function(storyDetails) {
                loadingOverlayToggler.hideLoading();
    			return storyDetails;
    		}, commonFunctions.promiseErrorCallback);
        }

        function getTopStoriesIds() {
        	var topStoriesPromise = $http.get(topStoriesUrl);
        	return topStoriesPromise.then(function(stories) {
        		return stories.data || [];
        	}, commonFunctions.promiseErrorCallback);
        }

        function getTopStoriesDetails(storyIds) {
        	var storyDetailPromises = [];

        	_.forEach(storyIds, function(storyId) {
        		storyDetailPromises.push(storyDetailService.getStoryDetail(storyId));
        	});

        	return storyDetailPromises;
        }
    }
})();
