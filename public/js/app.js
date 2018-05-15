var app= angular.module('myapp',['ngRoute','ngResource']);

app.config(function($routeProvider,$qProvider,$sceProvider, $locationProvider){

  $routeProvider
  .when('/',{
    templateUrl : './assests/pages/home.html',
    controller:'mycontroller'

  })

  .when('/quicklinks/teachersinfo',{
    templateUrl : './assests/pages/teachersinfo.html',
    controller:'teachercontroller'

  })

  .when('/quicklinks/aboutus',{
    templateUrl : './assests/pages/about.html',
    controller:'aboutcontroller'

  })

  .when('/quicklinks/contactus',{
    templateUrl : './assests/pages/contact.html',
    controller:'aboutcontroller'

  })

  .when('/quicklinks/admissions',{
    templateUrl : './assests/pages/admissions.html',
    controller:'aboutcontroller'

  })

  .when('/quicklinks/facilities',{
    templateUrl : './assests/pages/facilities.html',
    controller:'aboutcontroller'

  })

  .when('/quicklinks/placements',{
    templateUrl : './assests/pages/placements.html',
    controller:'aboutcontroller'

  })

  .when('/quicklinks/researches',{
    templateUrl : './assests/pages/researches.html',
    controller:'aboutcontroller'

  })

  .when('/quicklinks/complain',{
    templateUrl : './assests/pages/complain.html',
    controller:'aboutcontroller'

  })

  .when('/quicklinks/Campuslife',{
    templateUrl : './assests/pages/campuslife.html',
    controller:'aboutcontroller'

  })


$locationProvider.html5Mode(true)

});


app.controller('mycontroller',function($scope) {


});


app.controller('teachercontroller',function($scope) {


});


app.controller('aboutcontroller',function($scope, $http) {
  $http.get("/login")
.then(function(response) {
$scope.myWelcome = response.data;
});

});
