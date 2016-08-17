(function() {
  'use strict';

  function headerCtrl($log, $rootScope) {
    $log.debug('Header loaded');
  }

  angular.module('common.header', [])
    .controller('HeaderCtrl', headerCtrl);
})();
