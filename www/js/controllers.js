angular.module('handheld.controllers', ['ionic'])

        .controller('WaitingCtrl', function($scope, $ionicActionSheet, $ionicPopup, customerService, questionService) {
            $scope.customerService = customerService;
            $scope.questionService = questionService;

            $scope.itemClick = function(customer) {
                //for popup template
                $scope.currentCustomer = customer;

                $ionicActionSheet.show({
                    buttons: [
                        {text: '<i class="icon ion-ios7-telephone"></i> Call'},
                        {text: '<i class="icon ion-edit"> Edit'},
                    ],
                    destructiveText: '<i class="icon ion-ios7-alarm"></i> Miss',
                    //cancelText: 'Cancel',
                    buttonClicked: function(index) {
                        switch (index) {
                            case 0:
                                customerService.call(customer);
                                break;
                            case 1:
                                edit(customer);
                        }
                        return true;
                    },
                    destructiveButtonClicked: function() {
                        miss(customer);
                        return true;
                    }
                });
            }

            function edit(customer) {
                $ionicPopup.show({
                    title: 'Edit Customer', // String. The title of the popup.
                    templateUrl: 'templates/popup-edit-customer.html', // String (optional). The URL of an html template to place in the popup   body.
                    scope: $scope, // Scope (optional). A scope to link to the popup content.
                    buttons: [
                        {
                            text: 'Cancel',
                            type: 'button-default',
                            onTap: function(e) {
                            }
                        },
                        {
                            text: 'OK',
                            type: 'button-positive',
                            onTap: function(e) {
                                // Returning a value will cause the promise to resolve with the given value.
                                return $scope.data.response;
                            }
                        }
                    ]
                });
            }

            function miss(customer) {
                customerService.miss(customer);
            }
        })

        .controller('CalledCtrl', function($scope, customerService, questionService) {
            $scope.customerService = customerService;
            $scope.questionService = questionService;
        })
        /*
         .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
         $scope.friend = Friends.get($stateParams.friendId);
         })
         */
        .controller('MissedCtrl', function($scope, customerService, questionService) {
            $scope.customerService = customerService;
            $scope.questionService = questionService;
        });
