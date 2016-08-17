(function() {
    'use strict';

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
    });

    function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $logProvider.debugEnabled(true);
        $httpProvider.interceptors.push('httpInterceptor');
        $stateProvider
            .state('root', {
                views: {
                    'header': {
                        templateUrl: 'app/common/header.tpl.html',
                        controller: 'HeaderCtrl',
                        resolve: {}
                    },
                    'footer': {
                        templateUrl: 'app/common/footer.tpl.html',
                        controller: 'FooterCtrl'
                    }
                }
            });
    }

    function MainCtrl($log) {
        $log.debug('MainCtrl laoded!');
    }

    function run($log) {
        $log.debug('App is running!');
    }

    angular.module('app', [
            'ui.router',
            'home',
            'login',
            'cart',
            'myaccount',
            'select-print',
            'select-broadcast',
            'select-online',
            'common.header',
            'common.footer',
            'common.services.data',
            'common.directives.login',
            'common.directives.register',
            'common.filters.uppercase',
            'common.interceptors.http'
        ])
        .config(config)
        .run(run)
        .controller('MainCtrl', MainCtrl)
        .value('version', '1.1.0');
})();
