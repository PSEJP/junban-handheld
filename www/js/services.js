angular.module('handheld.services', [])

        .service("customerService", function($rootScope, $filter) {
            this.customers = [
                {
                    id: 1,
                    sequence: 1,
                    created_at: "2014-06-13 18:00:00",
                    updated_at: 0,
                    status: null,
                    signature: 'img/sign1.png',
                    answers: {
                        1: "1",
                        2: "Non-Smoking Area"
                    }
                },
                {
                    id: 2,
                    sequence: 2,
                    created_at: "2014-06-13 19:00:00",
                    updated_at: 0,
                    status: null,
                    signature: 'img/sign2.png',
                    answers: {
                        1: "2",
                        2: "Smoking Area"
                    }
                },
                {
                    id: 3,
                    sequence: 3,
                    created_at: "2014-06-13 20:00:00",
                    updated_at: 0,
                    status: null,
                    signature: 'img/sign3.png',
                    answers: {
                        1: "3",
                        2: "Either Will Do"
                    }
                },
                {
                    id: 4,
                    sequence: 4,
                    created_at: "2014-06-13 21:00:00",
                    updated_at: 0,
                    status: null,
                    signature: 'img/sign4.png',
                    answers: {
                        1: "4",
                        2: "4th Answer"
                    }
                },
                {
                    id: 5,
                    sequence: 5,
                    created_at: "2014-06-13 21:00:00",
                    updated_at: 0,
                    status: null,
                    signature: 'img/sign4.png',
                    answers: {
                        1: "5",
                        2: "5th Answer"
                    }
                },
                {
                    id: 6,
                    sequence: 6,
                    created_at: "2014-06-13 21:00:00",
                    updated_at: 0,
                    status: null,
                    signature: 'img/sign4.png',
                    answers: {
                        1: "6",
                        2: "6th Answer"
                    }
                },
                {
                    id: 7,
                    sequence: 7,
                    created_at: "2014-06-13 21:00:00",
                    updated_at: 0,
                    status: null,
                    signature: 'img/sign4.png',
                    answers: {
                        1: "7",
                        2: "7th Answer"
                    }
                }
            ];

            this.get = function(id) {
                for(var i in this.customers) {
                    if(this.customers[i].id == id) {
                        return this.customers[i];
                    }
                }
                return false;
            }

            this.call = function(customer) {
                customer.status = 'C';
                customer.updated_at = new Date().getTime();
                $rootScope.$broadcast('customer:called', {customer: customer});
            }
            
            this.miss = function(customer) {
                customer.status = 'M';
                customer.updated_at = new Date().getTime();
                $rootScope.$broadcast('customer:missed', {customer: customer});
            }
            
            this.getWaitingCustomers = function() {
                var waitingCustomers = $filter('filter')(this.customers, {status:null});
                return $filter('orderBy')(waitingCustomers, 'sequence', false);
            };
            
            this.getCalledCustomers = function() {
                var calledCustomers = $filter('filter')(this.customers, {status:'C'});
                return $filter('orderBy')(calledCustomers, '-updated_at', false);
            }
            
            this.getMissedCustomers = function() {
                var missedCustomers = $filter('filter')(this.customers, {status:'M'});
                return $filter('orderBy')(missedCustomers, '-updated_at', false);
            }
        })

        .service("questionService", function() {
            this.questions = {
                1: {
                    question: "How many persons are there in your party?",
                    name: 'Pax',
                    answers: [
                        "1", "2", "3", "4", "5", "6", "7", "8+"
                    ]
                },
                2: {
                    question: "Which area do you prefer?",
                    name: 'Area',
                    answers: [
                        "Non-Smoking Area", "Smoking Area", "Either Will Do", "4th Answer"
                    ]
                }
            };
        });