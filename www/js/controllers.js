angular.module('handheld.controllers', ['ionic'])

        .controller('WaitingCtrl', function($scope, $state) {
            $scope.itemClick = function(customer) {
                $state.go('tab.waiting-customer', {
                    id: customer.id
                });
            }
        })
        .controller('WaitingCustomerCtrl', function($scope, $stateParams, $ionicModal,  $ionicNavBarDelegate, customerService, editModalFactory) {
            $scope.currentCustomer = customerService.get($stateParams.id);

            $scope.call = function() {
                customerService.call($scope.currentCustomer);
                $ionicNavBarDelegate.back();
            }

            $scope.edit = function() {
                editModalFactory($scope);
            }

            $scope.miss = function() {
                customerService.miss($scope.currentCustomer);
                $ionicNavBarDelegate.back();
            }
        })

        .controller('CalledCtrl', function($scope, $state){
            $scope.itemClick = function(customer) {
                $state.go('tab.called-customer', {
                    id: customer.id
                });
            }
        })
        .controller('CalledCustomerCtrl', function($scope, $stateParams, $ionicNavBarDelegate, customerService, editModalFactory) {
            $scope.currentCustomer = customerService.get($stateParams.id);
            
            $scope.edit = function() {
                editModalFactory($scope);
            }
            
            $scope.wait = function() {
                customerService.wait($scope.currentCustomer);
                $ionicNavBarDelegate.back();
            }
        })
        
        .controller('MissedCtrl', function($scope, $state){
            $scope.itemClick = function(customer) {
                $state.go('tab.missed-customer', {
                    id: customer.id
                });
            }
        })
        .controller('MissedCustomerCtrl', function($scope, $stateParams, $ionicNavBarDelegate, customerService, editModalFactory) {
            $scope.currentCustomer = customerService.get($stateParams.id);
            
            $scope.edit = function() {
                editModalFactory($scope);
            }
            
            $scope.wait = function() {
                customerService.wait($scope.currentCustomer);
                $ionicNavBarDelegate.back();
            }
        })
;
