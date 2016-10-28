app.controller("bigbangCtrl", function ($scope, $css) {
    // $scope.home = "我是home";

    //添加css文件到页面中

    $css.removeAll();
    $css.add('show/css/bigbang.css');
});
