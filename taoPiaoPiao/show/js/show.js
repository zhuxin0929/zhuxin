app.controller("showCtrl", function ($scope, $css, $http) {
    // $scope.home = "我是home";

    //添加css文件到页面中

    $css.removeAll();
    $css.add('../show/css/show.css');


            // 记录当前下标
            var index = 0;

            // 把所有li的宽度调整为和wrapper一样大小
            $('.content > ul > li').width($('.wrapper').width());

            // 给tab按钮绑定事件
            $('nav section').on('tap', function (e) {

                // 调用move函数，传递当前点击按钮的下标
                index = $(this).index();
                move();
            });

            // 编写函数，实现ul的位移
            function move() {
                // 使用li的宽度乘以点击的tab按钮的下标
                var x = -$('.content > ul > li').width() * index + "px";
                // 修改ul的位移值
                $('.content > ul').css({
                    transform: "translateX("+ x +")"
                });

                // 处理Tab按钮效果
                $('nav section').removeClass('active');
                $('nav section').eq(index).addClass('active');
                var li1 = $(".content > ul > li:nth-child(1)");
                var li2 = $(".content > ul > li:nth-child(2)");
                var li3 = $(".content > ul > li:nth-child(3)");
                // console.log(li3.offset().left);
            }

            // 给ul添加滑动事件
            $('.content > ul').on('swipeLeft swipeRight', function (e) {
                if (e.type == 'swipeLeft') {
                    index++;
                    if (index >= $('.content > ul > li').length) {
                        index = 0;
                        console.log(index);
                    }
                } else if (e.type == 'swipeRight') {
                    index--;
                    if (index < 0) {
                        index = $('.content > ul > li').length - 1;
                    }
                }
                move();
                // console.log(e);
            });


    $http.get("http://localhost:8888/data0.json").success(function (data) {
        $scope.data = data.data0;
        $scope.data1 = data.data2;
        // console.log($scope.data);
    });

});
