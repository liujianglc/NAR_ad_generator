(function() {
  'use strict';

  function loginDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/common/directives/login.tpl.html',
      replace: true,
      /*jshint unused:false*/
      link: function($scope, elm, attrs) {
          console.log('login directive');
      }/*,
      controller: ['$state', '$stateParams', function($scope, $state, $stateParams){
          $scope.do_login = function(){
              console.log('directive do login');
              console.log($state);
          }
      }]*/
    };
  }

  angular.module('common.directives.login', [])
    .directive('login', loginDirective);
})();
