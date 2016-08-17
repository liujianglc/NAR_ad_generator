(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.myaccount', {
        url: '/myaccount',
        views: {
          '@': {
            templateUrl: '/src/client/app/core/myaccount/myaccount.tpl.html',
            controller: 'MyAccountCtrl as myaccount'
          }
        }
      });
  }

  /**
   * @name  gettingStartedCtrl
   * @description Controller
   */
  function MyAccountCtrl($log) {
      $log.debug('I\'m a method');
  }

  angular.module('myaccount', [])
    .config(config)
    .controller('MyAccountCtrl', MyAccountCtrl);
})();
