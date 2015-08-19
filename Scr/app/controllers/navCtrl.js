'use strict';

angular.module('app')
    .controller('navCtrl', ['$scope', 'stubData', function($scope){
        $scope.aside = true;
    }]);