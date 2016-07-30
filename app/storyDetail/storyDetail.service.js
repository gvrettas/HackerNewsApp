(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .factory('storyDetailService', storyDetailService);

    storyDetailService.$inject = ['$http', '$q', 'hackernewsBaseUrl', 'hackernewsUrlSuffix', 'commonFunctions', '_', 'loadingOverlayToggler'];

    /* @ngInject */
    function storyDetailService($http, $q, hackernewsBaseUrl, hackernewsUrlSuffix, commonFunctions, _, loadingOverlayToggler) {
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
            loadingOverlayToggler.showLoading();
        	var storyDetailUrl = getItemUrl(storyId);

        	var storyDetailPromise = $http.get(storyDetailUrl);
        	return storyDetailPromise.then(function(storyDetail) {
                loadingOverlayToggler.hideLoading();
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
            loadingOverlayToggler.showLoading();
            var commentDetailUrl = getItemUrl(commentId);

            var commentDetailPromise = $http.get(commentDetailUrl);
            return commentDetailPromise.then(function(commentDetail) {
                loadingOverlayToggler.hideLoading();
                return commentDetail.data || {}
            }, commonFunctions.promiseErrorCallback);
        }

        function getStoryWithComments (storyId) {
            loadingOverlayToggler.showLoading();
            var storyDetailPromise = getStoryDetail(storyId);

            var storyWithComments = {};
            return storyDetailPromise.then(function(storyDetail) {
                storyWithComments = storyDetail;
                var commentDetailPromises = getStoryCommentsDetails(storyDetail.kids);
                return $q.all(commentDetailPromises);
            }, commonFunctions.promiseErrorCallback)

            .then(function(commentDetails) {
                loadingOverlayToggler.hideLoading();
                storyWithComments.comments = commentDetails;
                return storyWithComments;
            }, commonFunctions.promiseErrorCallback);
        }
    }
})();
