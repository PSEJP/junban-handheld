angular.module('handheld.directives', ['ionic'])

        .directive('animatedNavBar', ['$rootScope', '$state', function($rootScope, $state) {
                return {
                    restrict: 'A',
                    link: function(scope, elem, attrs) {
                        var currentClass = '';

                        //init
                        check($state.current.name)

                        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                            check(toState.name);
                        });

                        function check(stateName) {
                            var patterns = {
                                'tab\.waiting.*': 'bar-positive',
                                'tab\.called.*': 'bar-balanced',
                                'tab\.missed.*': 'bar-assertive',
                            };

                            for (var pattern in patterns) {
                                if (stateName.match(pattern)) {
                                    update(patterns[pattern]);
                                }
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