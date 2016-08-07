(function() {
    angular.module('dragon', [])
        .controller('DragonsController', DragonsController)
        .controller('DragonController', DragonController)
        .factory('DragonFactory', DragonFactory);

    function DragonsController(DragonFactory) {
        var dragons = this;
        releaseDragons();

        function releaseDragons(){
          return DragonFactory.getAllDragons().then(function(response){
                if(response.success){
                  dragons.all = response.dragons;
                }
          });
        }

    }

    function DragonController(DragonFactory,$stateParams) {
        var dragon = this;
        if($stateParams.dragonId){
            var dragonId = $stateParams.dragonId;
            callDragon(dragonId);
        }

        function callDragon(dragonId){
          return DragonFactory.getDragonDetails(dragonId).then(function(response){
              if(response.success){
                dragon.secret = response.dragon;
              }
          });
        }
    }

    function DragonFactory(httpi, API) {
        var services = {
            getAllDragons: getAllDragons,
            getDragonDetails: getDragonDetails,
            saveDragon: saveDragon
        };
        return services;

        function getAllDragons() {
            var request = {
                url: API.GET_ALL_DRAGONS,
                method: 'GET'
            };
            return httpi(request)
                .then(sendAllDragons)
                .catch(function(error) {
                    console.log(error);
                });

            function sendAllDragons(response) {
                return response.data;
            }
        }

        function getDragonDetails(dragonId) {
            var request = {
                url: API.GET_DRAGON_DETAILS,
                method: 'GET',
                params: {
                    id: dragonId
                }
            };
            return httpi(request)
                .then(sendDragonDetails)
                .catch(function(error) {
                    console.log(error);
                });

            function sendDragonDetails(response) {
                return response.data;
            }
        }

        function saveDragon(dragon) {

        }
    }
})();
