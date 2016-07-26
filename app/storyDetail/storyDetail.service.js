(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .factory('storyDetailService', storyDetailService);

    storyDetailService.$inject = ['$http', 'hackernewsBaseUrl', 'hackernewsUrlSuffix', 'commonFunctions'];

    /* @ngInject */
    function storyDetailService($http, hackernewsBaseUrl, hackernewsUrlSuffix, commonFunctions) {
        var service = {
            getStoryDetail: getStoryDetail
        };
        
        return service;

        ////////////////
        function getStoryDetail(storyId) {
        	var storyDetailUrl = hackernewsBaseUrl + 'item/' + storyId + hackernewsUrlSuffix;

        	var storyDetailPromise = $http.get(storyDetailUrl);
        	return storyDetailPromise.then(function(storyDetail) {
        		return storyDetail.data || {};
        	}, commonFunctions.promiseErrorCallback);
        }
    }
})();
