(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.home', {
        url: '/',
        views: {
          '@': {
            templateUrl: '/src/client/app/core/home/home.tpl.html',
            controller: 'HomeCtrl as home',
            resolve: {
            }
          }
        }
      });
  }

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function HomeCtrl() {
    var home = this;

  }

  angular.module('home', [])
    .config(config)
    .controller('HomeCtrl', HomeCtrl);
})();
