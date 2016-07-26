(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .factory('storyDetailService', storyDetailService);

    storyDetailService.$inject = ['$http', '$q', 'hackernewsBaseUrl', 'hackernewsUrlSuffix', 'commonFunctions'];

    /* @ngInject */
    function storyDetailService($http, $q, hackernewsBaseUrl, hackernewsUrlSuffix, commonFunctions) {
        var service = {
            getStoryDetail: getStoryDetail,
            getStoryWithComments: getStoryWithComments
        };
        
        return service;

        ////////////////
        function getItemUrl(itemId) {
            var itemUrl = hackernewsBaseUrl + 'item/' + itemId + hackernewsUrlSuffix;
            return itemUrl;
        }

        function getStoryDetail(storyId) {
        	var storyDetailUrl = getItemUrl(storyId);

        	var storyDetailPromise = $http.get(storyDetailUrl);
        	return storyDetailPromise.then(function(storyDetail) {
        		return storyDetail.data || {};
        	}, commonFunctions.promiseErrorCallback);
        }

        function getStoryCommentsDetails(commentIds) {
            var commentDetailPromises = [];

            _.forEach(commentIds, function(commentId) {
                commentDetailPromises.push(getCommentDetail(commentId));
            });

            return commentDetailPromises;
        }

        function getCommentDetail(commentId) {
            var commentDetailUrl = getItemUrl(commentId);

            var commentDetailPromise = $http.get(commentDetailUrl);
            return commentDetailPromise.then(function(commentDetail) {
                return commentDetail.data || {}
            }, commonFunctions.promiseErrorCallback);
        }

        function getStoryWithComments (storyId) {
            var storyDetailPromise = getStoryDetail(storyId);

            var storyWithComments = {};
            return storyDetailPromise.then(function(storyDetail) {
                storyWithComments = storyDetail;
                var commentDetailPromises = getStoryCommentsDetails(storyDetail.kids);
                return $q.all(commentDetailPromises);
            }, commonFunctions.promiseErrorCallback)

            .then(function(commentDetails) {
                storyWithComments.comments = commentDetails;
                return storyWithComments;
            }, commonFunctions.promiseErrorCallback);
        }
    }
})();
