var app= angular.module('myapp',['ngRoute','ngResource']);

app.config(function($routeProvider,$qProvider,$sceProvider){

  $routeProvider
  .when('/',{
    templateUrl : './assests/pages/home.html',
    controller:'mycontroller'

  })

  .when('/teachersinfo',{
    templateUrl : './assests/pages/teachersinfo.html',
    controller:'mycontroller'

  })

});


app.controller('mycontroller',function($scope) {


});
