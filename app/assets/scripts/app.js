/*global angular*/
'use strict';

/*jshint unused: true*/
var home = angular.module('Home', []);
var header = angular.module('Header', []);
var residential = angular.module('Residential', []);
var commercial = angular.module('Commercial', []);
var social = angular.module('Social', []);
var contact = angular.module('Contact', []);
/*jshint unused: false*/
var acs = angular.module('acs', [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngMdIcons',
    'ngRoute',
    'angularytics',
    'Home',
    'Header',
    'Residential',
    'Commercial',
    'Social',
    'Contact'
])
    .config([
        '$routeProvider',
        '$mdIconProvider',
        '$mdThemingProvider',
        'AngularyticsProvider',
        function (
            $routeProvider,
            $mdIconProvider,
            $mdThemingProvider,
            AngularyticsProvider
        ) {

            // routing
            $routeProvider.when('/home', {
                templateUrl: 'home/home.html',
                title: 'Home'
            })
            .when('/residential', {
                templateUrl: 'residential/residential.html',
                title: 'House Cleaning'
            })
            .when('/commercial', {
                templateUrl: 'commercial/commercial.html',
                title: 'Office Cleaning'
            })
            .when('/social', {
                templateUrl: 'social/social.html',
                title: 'Social Networking'
            })
            .when('/contact', {
                templateUrl: 'contact/contact.html',
                title: 'Contact Us'
            });

            $routeProvider.otherwise({redirectTo: '/home'});


            // icons
            $mdIconProvider
                .iconSet('cleaning', 'img/icons/sprite.svg', 24)
                .iconSet('font-awesome', 'bower_components/fontawesome/fonts/fontawesome-webfont.svg', 24);

                $mdThemingProvider.definePalette('acsPalette', {
                    '50': '52d728',
                    '100': '90e974',
                    '200': '6edf4b',
                    '300': '32bf05',
                    '400': '249400',
                    '500': '1ea288',
                    '600': '65cbb7',
                    '700': '3cb39b',
                    '800': '049074',
                    '900': '00705a',
                    'A100': 'fe802f',
                    'A200': 'ffb17f',
                    'A400': 'ff9855',
                    'A700': 'e15c06',
                    // whether, by default, text (contrast) on this palette
                    // should be dark or light
                    'contrastDefaultColor': 'light',
                    // hues which contrast should be 'dark' by default
                    'contrastDarkColors': [
                        '50', '100', '200', '300', '400', 'A100'
                    ],
                    // could also specify this if default was 'dark'
                    'contrastLightColors': undefined
                });
                $mdThemingProvider.theme('default')
                    .primaryPalette('acsPalette');



            // Angularytics
            AngularyticsProvider
                .setEventHandlers(['Console', 'GoogleUniversal']);


        }
    ])

    .run([
        '$rootScope',
        'Angularytics',
        function (
            $rootScope,
            Angularytics
        ) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.pageTitle = current.$$route.title;
        });
        Angularytics.init();

    }]
        );
