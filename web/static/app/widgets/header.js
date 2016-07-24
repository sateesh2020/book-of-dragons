(function(){
    angular.module('widgets')
           .directive('bookHeader',function(){
              return{
                restrict:'E',
                replace:true,
                templateUrl:'app/widgets/header.html',
                link:function(scope,element,attrs){

                }
              };
           });
})();
