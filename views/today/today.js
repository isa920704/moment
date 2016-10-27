/**
 * Created by hxsd on 2016/9/29.
 */
angular.module("myapp")
    .controller("todayCtrl",function($scope,$http){
        $http.get("views/today/today.json").success(function (data) {
            $scope.items = data;
        });

});