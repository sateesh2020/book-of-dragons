(function() {
    angular.module('pages', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function($stateProvider, $urlRouterProvider, $locationProvider) {
                $urlRouterProvider.otherwise('/vikings');
                $stateProvider
                    .state('home', {
                        url: '/home',
                        templateUrl:'app/home/home.html'
                    })
                    .state('vikings', {
                        url: '/vikings',
                        templateUrl:'app/vikings/all_vikings.html',
                        controller:'VikingsController',
                        controllerAs:'vikings'
                    })
                    .state('viking', {
                        url: '/viking/:vikingId',
                        templateUrl:'app/vikings/viking.html',
                        controller:'VikingController',
                        controllerAs:'viking'
                    })
                    .state('dragons', {
                        url: '/dragons',
                        templateUrl:'app/dragons/all_dragons.html',
                        controller:'DragonsController',
                        controllerAs:'dragons'
                    })
                    .state('dragon', {
                        url: '/dragon/:dragonId',
                        templateUrl:'app/dragons/dragon.html',
                        controller:'DragonController',
                        controllerAs:'dragon'
                    });
            }
        ]);

})();
