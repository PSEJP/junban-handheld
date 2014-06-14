angular.module('handheld.controllers', ['ionic'])

        .controller('WaitingCtrl', function($scope, $state) {
            $scope.itemClick = function(customer) {
                console.log(customer);
                $state.go('tab.waiting-customer', {
                    id: customer.id
                });
            }
        })
        .controller('WaitingCustomerCtrl', function($scope, $stateParams, $ionicModal,  $ionicNavBarDelegate, customerService, questionService) {
            $scope.currentCustomer = customerService.get($stateParams.id);

            $scope.call = call;
            $scope.edit = edit;
            $scope.miss = miss;

            function call() {
                customerService.call($scope.currentCustomer);
                $ionicNavBarDelegate.back();
            }

            function edit() {
                $ionicModal.fromTemplateUrl("templates/modal-customer-edit.html", {
                    scope: $scope,
                    animation: 'slide-in-up'
                }).then(function(modal) {
                    $scope.formData = {
                        parameters: {}
                    };
                    for(var id in questionService.questions) {
                        var question = questionService.questions[id];
                        $scope.formData.parameters[id] = $scope.currentCustomer.answers[id];
                    }
                    
                    $scope.cancel = function() {
                        modal.hide();
                    };
                    $scope.save = function() {
                        modal.hide();
                    };
                    modal.show();
                });
            }

            function miss() {
                customerService.miss($scope.currentCustomer);
                $ionicNavBarDelegate.back();
            }
        })

        .controller('CalledCtrl', function($scope) {

        })
        /*
         .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
         $scope.friend = Friends.get($stateParams.friendId);
         })
         */
        .controller('MissedCtrl', function($scope) {

        });
