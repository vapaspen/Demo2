'use strict';

angular.module('app',['ngAria','ngRoute', 'ngAnimate','ngSanitize','mgcrea.ngStrap', 'campDataLoder'])
    .config(['$routeProvider', '$asideProvider',  function($routeProvider, $asideProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'templates/frames/homeTemplate.html',
            controller : 'homeCtrl'
        })
        .otherwise({
            redirectTo : '/'
        });
    angular.extend($asideProvider.defaults, {
        html: true
    });
}])
.value('stubData',0);