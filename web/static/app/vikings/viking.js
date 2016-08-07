(function() {
    angular.module('viking', [])
        .controller('VikingsController', VikingsController)
        .controller('VikingController', VikingController)
        .factory('VikingFactory', VikingFactory);

    function VikingsController(VikingFactory) {
        var vikings = this;
        trainVikings();

        function trainVikings(){
          return VikingFactory.getAllVikings().then(function(response){
                if(response.success){
                  vikings.all = response.vikings;
                }
          });
        }
    }

    function VikingController(VikingFactory,$stateParams) {
        var viking = this;
        if($stateParams.vikingId){
            var vikingId = $stateParams.vikingId;
            callViking(vikingId);
        }

        function callViking(vikingId){
          return VikingFactory.getVikingDetails(vikingId).then(function(response){
              if(response.success){
                viking.secret = response.viking;
              }
          });
        }


    }

    function VikingFactory(httpi,API) {
        var services = {
            getAllVikings: getAllVikings,
            getVikingDetails: getVikingDetails,
            saveViking: saveViking
        };
        return services;

        function getAllVikings() {
            var request = {
                url: API.GET_ALL_VIKINGS,
                method: 'GET'
            };
            return httpi(request)
                .then(sendAllVikings)
                .catch(function(error) {
                    console.log(error);
                });

            function sendAllVikings(response) {
                return response.data;
            }
        }

        function getVikingDetails(vikingId) {
            var request = {
                url: API.GET_VIKING_DETAILS,
                method: 'GET',
                params: {
                    id: vikingId
                }
            };
            return httpi(request)
                .then(sendVikingDetails)
                .catch(function(error) {
                    console.log(error);
                });

            function sendVikingDetails(response) {
                return response.data;
            }
        }

        function saveViking(viking) {

        }
    }
})();
