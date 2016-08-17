(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.select-broadcast', {
        url: '/select-broadcast',
        views: {
          '@': {
            templateUrl: '/src/client/app/core/select-broadcast/select-broadcast.tpl.html',
            controller: 'SelectBroadCastCtrl as select_broadcast'
          }
        }
      });
  }

  /**
   * @name  gettingStartedCtrl
   * @description Controller
   */
  function SelectBroadCastCtrl($log) {
      $log.debug('I\'m a method');
  }

  angular.module('select-broadcast', [])
    .config(config)
    .controller('SelectBroadCastCtrl', SelectBroadCastCtrl);
})();
