var app = angular.module("myApp", ["ngRoute", "angularCSS"]);

app.config(["$routeProvider", function ($routeProvider) {

   $routeProvider.when('/', {
      templateUrl: './movie/html/movie.html',
    //   controller: 'homeCtrl'
   }).when('/cinema', {
      templateUrl: './cinema/html/cinema.html',
      controller: 'cinemaCtrl'
   }).when('/show', {
      templateUrl: './show/html/show.html',
      controller: 'showCtrl'
   }).when('/find', {
      templateUrl: './find/html/find.html',
      controller: 'findCtrl'
   }).when('/mine', {
      templateUrl: './mine/html/mine.html',
      controller: 'mineCtrl'
  }).when('/bigbang', {
      templateUrl: 'show/html/bigbang.html',
      controller: 'bigbangCtrl'
  }).when('/jinru', {
       templateUrl: 'cinema/html/jinru.html',
       controller: 'jinruCtrl'
    }).otherwise({
      redirectTo: '/'
   });
}]);
