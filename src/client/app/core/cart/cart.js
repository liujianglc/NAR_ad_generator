(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.cart', {
        url: '/cart',
        views: {
          '@': {
            templateUrl: '/src/client/app/core/cart/cart.tpl.html',
            controller: 'CartCtrl as cart'
          }
        }
      });
  }

  /**
   * @name  gettingStartedCtrl
   * @description Controller
   */
  function CartCtrl($log) {
      $log.debug('I\'m a method');
  }

  angular.module('cart', [])
    .config(config)
    .controller('CartCtrl', CartCtrl);
})();
