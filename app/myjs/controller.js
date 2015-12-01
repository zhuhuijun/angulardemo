var app = angular.module('routerApp')
/************************************************************///登录的控制器
app.controller('loginCtrl', function ($scope) {
    //注册的先隐藏
    $("#recoverform").hide();
    $scope.user = {
        uname: 'admin',
        upwd: 'admin'
    };

    /***
     * 注册按钮的点击事件
     * @constructor
     */
    $scope.Reg = function () {
        console.log('reg');
        $("#loginform").slideUp();
        $("#recoverform").fadeIn();
    };
    /***
     * 注册页面返回登录页面的按钮事件
     * @constructor
     */
    $scope.RegBack = function () {
        $("#recoverform").hide();
        $("#loginform").fadeIn();
    };

});