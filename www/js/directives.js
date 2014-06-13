angular.module('handheld.directives', ['ionic'])

        .directive('animatedNavBar', ['$rootScope', '$state', function($rootScope, $state) {
                return {
                    restrict: 'A',
                    link: function(scope, elem, attrs) {
                        var currentClass = '';

                        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                            check(toState.name);
                        });

                        function check(stateName) {
                            if (stateName.match('tab\.waiting.*')) {
                                update('bar-positive');
                            } else if (stateName == 'tab.called') {
                                update('bar-balanced');
                            } else if (stateName == 'tab.missed') {
                                update('bar-assertive');
                            }
                        }

                        function update(className) {
                            if (currentClass != className) {
                                $(elem).removeClass(currentClass);
                                currentClass = className;
                                $(elem).addClass(currentClass);
                            }
                        }
                    }
                };
            }])

        .directive('navButtonsRight', [function() {
                return {
                    replace: true,
                    restrict: 'E',
                    templateUrl: 'templates/nav-buttons-right.html'
                }
            }])

        .directive('animatedTab', [function() {
                return {
                    restrict: 'A',
                    link: function(scope, elem, attrs) {
                        scope.$on(attrs.animatedTab, function(event, args) {
                            $("a." + attrs.class).effect('shake');
                        });
                    }
                };
            }]);