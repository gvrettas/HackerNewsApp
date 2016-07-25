(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .factory('storiesService', storiesService);

    storiesService.$inject = ['$http', '$q', 'hackernewsBaseUrl', 'hackernewsUrlSuffix', 'commonFunctions'];

    /* @ngInject */
    function storiesService($http, $q, hackernewsBaseUrl, hackernewsUrlSuffix, commonFunctions) {
        var topStoriesUrl = hackernewsBaseUrl + 'topstories' + hackernewsUrlSuffix;

        var service = {
            getTopStories: getTopStories
        };

        return service;

        ////////////////
        function getTopStories() {
        	var storyIdsPromise = getTopStoriesIds();
        	
    		return storyIdsPromise.then(function(storyIds) {
    			var storyDetailPromises = getTopStoriesDetails(storyIds);
    			return $q.all(storyDetailPromises);
    		}, commonFunctions.promiseErrorCallback)

    		.then(function(storyDetails) {
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
        		storyDetailPromises.push(getStoryDetail(storyId));
        	});

        	return storyDetailPromises;
        }

        function getStoryDetail(storyId) {
        	var storyDetailUrl = hackernewsBaseUrl + 'item/' + storyId + hackernewsUrlSuffix;

        	var storyDetailPromise = $http.get(storyDetailUrl);
        	return storyDetailPromise.then(function(storyDetail) {
        		return storyDetail.data || {};
        	}, commonFunctions.promiseErrorCallback);
        }
    }
})();
