app.controller("jinruCtrl", function ($scope, $css, $http) {
    // $scope.home = "我是home";

    //添加css文件到页面中

    $css.removeAll();
    $css.add('./cinema/css/jinru.css');



    $http.get("http://localhost:8888/data0.json").success(function (data) {
        $scope.data = data.data3;
        // console.log(data);
        // console.log("hahahah");
    });

    $scope.toggle = function () {

        if ($("#p3")) {
            $("ul #p2").toggle();
            $("#p3").toggle();
            $("#p4").toggle();
        }
    }

});
