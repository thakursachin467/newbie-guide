var app= angular.module('myapp',['ngRoute','ngResource']);

app.config(function($routeProvider,$qProvider,$sceProvider){

  $routeProvider
  .when('/',{
    templateUrl : './assests/pages/home.html',
    controller:'mycontroller'

  })

  .when('/teachersinfo',{
    templateUrl : './assests/pages/teachersinfo.html',
    controller:'teachercontroller'

  })

  .when('/aboutus',{
    templateUrl : './assests/pages/about.html',
    controller:'aboutcontroller'

  })

  .when('/contactus',{
    templateUrl : './assests/pages/contact.html',
    controller:'aboutcontroller'

  })

  .when('/admissions',{
    templateUrl : './assests/pages/admissions.html',
    controller:'aboutcontroller'

  })

  .when('/facilities',{
    templateUrl : './assests/pages/facilities.html',
    controller:'aboutcontroller'

  })

  .when('/placements',{
    templateUrl : './assests/pages/placements.html',
    controller:'aboutcontroller'

  })

  .when('/researches',{
    templateUrl : './assests/pages/researches.html',
    controller:'aboutcontroller'

  })

  .when('/complain',{
    templateUrl : './assests/pages/complain.html',
    controller:'aboutcontroller'

  })

  .when('/Campuslife',{
    templateUrl : './assests/pages/campuslife.html',
    controller:'aboutcontroller'

  })


});


app.controller('mycontroller',function($scope) {


});


app.controller('teachercontroller',function($scope) {


});


app.controller('aboutcontroller',function($scope) {


});
