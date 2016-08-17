(function() {
    'use strict';

    /**
     * @name  config
     * @description config block
     */
    function config($stateProvider) {
        $stateProvider
            .state('root.login', {
                url: '/login',
                views: {
                    '@': {
                        templateUrl: '/src/client/app/core/login/login.tpl.html',
                        controller: 'LoginCtrl as login',
                        resolve: {
                        }
                    }
                }
            });
    }

    /**
     * @name  HomeCtrl
     * @description Controller
     */
    function LoginCtrl($scope, $state, $stateParams) {
        var home = this;
        console.log('login ctrl');
        $scope.do_login = function() {
            $state.go('root.home')
            console.log($scope.user);
        }
        $scope.do_forgot_password = function() {
            console.log($scope.forgot);
        }

        $scope.do_register = function() {
            console.log($scope.address);
            console.log($scope.signup);
        }
    }

    angular.module('login', [])
        .config(config)
        .controller('LoginCtrl', LoginCtrl);
})();
