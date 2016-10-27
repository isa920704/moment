/**
 * Created by hxsd on 2016/9/29.
 */
//动态

angular.module("myapp")
    .controller("dynamicCtrl",function($scope,$http){
        $http.get("views/dynamic/dynamic.json").success(function (data) {
            $scope.items = data;
        });
        $scope.aa = 111;

    });