/**
 * Created by hxsd on 2016/9/28.
 */
var myapp = angular.module("myapp",["ionic"]);

myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("tour",{
        url:"/tour",
        templateUrl:"views/tour/tour.html",
        controller:"tourCtrl"
    }).state("home",{
        url:"/home",
        abstract:true,
        templateUrl:"views/home/home.html"
    }).state("home.debris",{
        url:"/debris",
        views:{"home-debris":{
            templateUrl:"views/debris/debris.html",
            controller:"debrisCtrl"
        }}
    }).state("home.today",{
        url:"/today",
        views:{"home-today":{
            templateUrl:"views/today/today.html",
            controller:"todayCtrl"
        }}
    }).state("home.dynamic",{
        url:"/dynamic",
        views:{"home-dynamic":{
            templateUrl:"views/dynamic/dynamic.html",
            controller:"dynamicCtrl"
        }}
    }).state("home.mine",{
        url:"/mine",
        views:{"home-mine":{
            templateUrl:"views/mine/mine.html",
            controller:"mineCtrl"
        }}
    }).state("logoin",{
        url:"/logoin",
        templateUrl:"views/logoin/logoin.html",
    });
    $urlRouterProvider.otherwise("tour");


});

