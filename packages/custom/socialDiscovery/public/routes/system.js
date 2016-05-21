'use strict';

//Setting up route
angular.module('mean.meanStarter').config(['$meanStateProvider', '$urlRouterProvider',
  function($meanStateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $meanStateProvider
      .state('home', {
        url: '/',
        template: "<h1>hello</h1>"
      });
  }
]).config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);
