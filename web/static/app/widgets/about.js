(function(){
    angular.module('widgets')
           .directive('about',function(){
              return{
                restrict:'E',
                replace:true,
                scope:{
                  data:'='
                },
                templateUrl:'app/widgets/about.html',
                controller:function($scope){
                  var about = this;
                  $scope.$watch('data',function(newVal,oldVal){
                      if(angular.isObject(newVal)){
                        about.data = newVal;
                      }else{
                        about.data = {};
                      }
                  },true);
                },
                controllerAs:'about'
              };
           });
})();
