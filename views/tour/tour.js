/**
 * Created by hxsd on 2016/9/29.
 */
angular.module("myapp").controller("tourCtrl",function($scope,$interval,$location){
 //直接进入今日
    $scope.count = 3;
    var timer = null;
    timer = $interval(function(){
       if($scope.count>1){
           $scope.count--;
       }else if($scope.count==1){
           $interval.cancel(timer);
           $location.path('/home/today');
       }
    },1000);


});