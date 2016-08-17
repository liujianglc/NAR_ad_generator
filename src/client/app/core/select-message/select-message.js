(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.select-message', {
        url: '/select-message',
        views: {
          '@': {
            templateUrl: '/src/client/app/core/select-message/select-message.tpl.html',
            controller: 'SelectMessageCtrl as select_message'
          }
        }
      });
  }

  /**
   * @name  gettingStartedCtrl
   * @description Controller
   */
  function SelectMessageCtrl($log) {
      $log.debug('I\'m a method');
  }

  angular.module('select-message', [])
    .config(config)
    .controller('SelectMessageCtrl', SelectMessageCtrl);
})();
