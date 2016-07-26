(function() {
    'use strict';

    angular
        .module('hackernewsApp')
        .constant('hackernewsBaseUrl', 'https://hacker-news.firebaseio.com/v0/')
        .constant('hackernewsUrlSuffix', '.json?print=pretty')

        // Third-party globals
        .constant('_', _);
})();