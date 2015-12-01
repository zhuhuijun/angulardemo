var routerApp = angular.module('routerApp', ['ui.router']);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
routerApp.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
routerApp.config(function ($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider.when('/main/', 'main.con1');
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpls/home.html'
                },
                'main@index': {
                    templateUrl: 'tpls/loginForm.html'
                }
            }
        })
        .state('main', {
            url: '/main/',
            views: {
                '': {
                    templateUrl: 'tpls/main.html'//默认主页面
                },
                'left@main': {
                    templateUrl: 'tpls/left.html'//左侧导航
                },
                'footer@main': {
                    templateUrl: 'tpls/footer.html'//底部内容
                },
                'top@main': {
                    templateUrl: 'tpls/top.html'//头部内容
                },
                'content@main': {
                    templateUrl: 'tpls/contentbox.html'//内容区
                }
            }
        })
        .state('main.con1', {
            url: 'con1',
            templateUrl: 'tpls/content.html'
        })
        .state('main.charts', {
            url: 'charts',
            templateUrl: 'tpls/charts.html'
        })
        .state('main.tables', {
            url: 'tables',
            templateUrl: 'tpls/tables.html'
        })
        .state('main.grid', {
            url: 'grid',
            templateUrl: 'tpls/grid.html'
        })
        .state('main.buttons', {
            url: 'buttons',
            templateUrl: 'tpls/buttons.html'
        })
        .state('main.element', {
            url: 'element',
            templateUrl: 'tpls/interface.html'
        })
        .state('main.widgets', {
            url: 'widgets',
            templateUrl: 'tpls/widgets.html'
        })
        .state('main.form-common', {
            url: 'common',
            templateUrl: 'tpls/common.html'
        })
        .state('main.form-validation', {
            url: 'validation',
            templateUrl: 'tpls/validation.html'
        })
        .state('main.form-wizard', {
            url: 'wizard',
            templateUrl: 'tpls/wizard.html'
        })
});