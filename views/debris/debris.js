/**
 * Created by hxsd on 2016/9/29.
 */
//碎片
angular.module("myapp")
    .controller("debrisCtrl",function($scope,$http){
        $http.get("views/debris/debris.json").success(function (data) {
            $scope.items = data;
        });

        $scope.contentSrc = function(contentSrc){
            if(contentSrc){
                return contentSrc;
            }else{
                return false;
            }
        }

    });