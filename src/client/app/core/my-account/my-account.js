(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.my-account', {
        url: '/my-account',
        views: {
          '@': {
            templateUrl: '/src/client/app/core/myaccount/my-account.tpl.html',
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

  angular.module('my-account', [])
    .config(config)
    .controller('MyAccountCtrl', MyAccountCtrl);
})();
