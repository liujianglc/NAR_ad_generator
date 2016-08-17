(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.select-online', {
        url: '/select-online',
        views: {
          '@': {
            templateUrl: '/src/client/app/core/select-online/select-online.tpl.html',
            controller: 'SelectOnlineCtrl as select_online'
          }
        }
      });
  }

  /**
   * @name  gettingStartedCtrl
   * @description Controller
   */
  function SelectOnlineCtrl($log) {
      $log.debug('I\'m a method');
  }

  angular.module('select-online', [])
    .config(config)
    .controller('SelectOnlineCtrl', SelectOnlineCtrl);
})();
