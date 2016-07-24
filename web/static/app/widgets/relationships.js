(function(){
    angular.module('widgets')
           .directive('relationships',function(){
              return{
                restrict:'E',
                replace:true,
                scope:{
                  data:'='
                },
                templateUrl:'app/widgets/relationships.html',
                controller:function($scope){
                  var relationship = this;
                  $scope.$watch('data',function(newVal,oldVal){
                      if(angular.isObject(newVal)){
                        relationship.data = newVal;
                      }else{
                        relationship.data = {};
                      }
                  },true);
                },
                controllerAs:'relationship'
              };
           });
})();
