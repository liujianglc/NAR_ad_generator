(function() {
    'use strict';

    /**
     * @name  config
     * @description config block
     */
    function config($stateProvider) {
        $stateProvider
            .state('root.register', {
                url: '/register',
                views: {
                    '@': {
                        templateUrl: '/src/client/app/core/register/register.tpl.html',
                        controller: 'RegisterCtrl as reg',
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
    function RegisterCtrl($scope, $state, $stateParams) {
        var home = this;
        console.log('RegisterCtrl ctrl');
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

    angular.module('register', [])
        .config(config)
        .controller('RegisterCtrl', RegisterCtrl);
})();
