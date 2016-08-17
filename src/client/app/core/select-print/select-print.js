(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.select-print', {
        url: '/select-print',
        views: {
          '@': {
            templateUrl: '/src/client/app/core/select-print/select-print.tpl.html',
            controller: 'SelectPrintCtrl as select_print'
          }
        }
      });
  }

  /**
   * @name  gettingStartedCtrl
   * @description Controller
   */
  function SelectPrintCtrl($log) {
      $log.debug('I\'m a method');
  }

  angular.module('select-print', [])
    .config(config)
    .controller('SelectPrintCtrl', SelectPrintCtrl);
})();
