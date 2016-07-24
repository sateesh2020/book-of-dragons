(function(){
    angular.module('widgets')
           .directive('charDetails',function(){
              return{
                restrict:'E',
                replace:true,
                scope:{
                  data:'='
                },
                templateUrl:'app/widgets/details.html',
                controller:function($scope){
                  var character = this;
                  $scope.$watch('data',function(newVal,oldVal){
                      if(angular.isObject(newVal)){
                        character.data = newVal;
                      }else{
                        character.data = {};
                      }
                  },true);
                },
                controllerAs:'character'
              };
           });
})();
