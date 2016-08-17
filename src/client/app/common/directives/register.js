(function() {
  'use strict';

  function registerDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/common/directives/register.tpl.html',
      replace: true,
      /*jshint unused:false*/
      link: function(scope, elm, attrs) {

          console.log(elm);
          console.log('register directive')
      }
    };
  }

  angular.module('common.directives.register', [])
    .directive('register', registerDirective);
})();
