app.controller("cinemaCtrl", function ($scope, $css, $http) {
    // $scope.home = "我是home";

    //添加css文件到页面中

    $css.removeAll();
    $css.add('./cinema/css/cinema.css');

    var mySwiper = new Swiper('.swiper-container', {
       direction: 'horizontal',
       loop: true,
       pagination: '.swiper-pagination',
       autoplay: 500
   });


   $http.get("http://localhost:8888/data0.json").success(function (data) {
       $scope.data = data.data1;
       console.log($scope.data);
   });


});
