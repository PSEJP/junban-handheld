// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('handheld', ['ionic', 'handheld.controllers', 'handheld.services', 'handheld.directives'])

        .run(function($ionicPlatform, $rootScope, $state, customerService, questionService) {
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }

                $rootScope.toggleFullscreen = function() {
                    screenfull.toggle(document.documentElement);
                    $rootScope.isFullscreen = screenfull.isFullscreen;
                }
                $rootScope.isFullscreen = screenfull.isFullscreen;

                $rootScope.tabWaitingClicked = function() {
                    console.log($state.current);
                    if($state.is('tab.waiting-customer')) {
                        $state.go('tab.waiting');
                    }
                }

                $rootScope.customerService = customerService;
                $rootScope.questionService = questionService;
            });
        })

        .config(function($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider

                    // setup an abstract state for the tabs directive
                    .state('tab', {
                        url: "/tab",
                        abstract: true,
                        templateUrl: "templates/tabs.html"
                    })

                    // Each tab has its own nav history stack:

                    .state('tab.waiting', {
                        url: '/waiting',
                        views: {
                            'tab-waiting': {
                                templateUrl: 'templates/tab-waiting.html',
                                controller: 'WaitingCtrl'
                            }
                        }
                    })
                    .state('tab.waiting-customer', {
                        url: '/waiting-customer/:id',
                        views: {
                            'tab-waiting': {
                                templateUrl: 'templates/tab-waiting-customer.html',
                                controller: 'WaitingCustomerCtrl'
                            }
                        }
                    })

                    .state('tab.called', {
                        url: '/called',
                        views: {
                            'tab-called': {
                                templateUrl: 'templates/tab-called.html',
                                controller: 'CalledCtrl'
                            }
                        }
                    })

                    .state('tab.missed', {
                        url: '/missed',
                        views: {
                            'tab-missed': {
                                templateUrl: 'templates/tab-missed.html',
                                controller: 'MissedCtrl'
                            }
                        }
                    })

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/waiting');

        });

