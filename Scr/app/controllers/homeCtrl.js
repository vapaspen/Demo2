 'use strict';

angular.module('app')
    .controller('homeCtrl', ['$scope','settingData', 'stubData',  function($scope, settingData, stubData){

        $scope.title = "Home";
        $scope.settingData = settingData;
        settingData.get().then(function(LoadedData){
             $scope.heading = LoadedData.CAMPAIGNS[stubData].CAMPAIGN.TITLE;
        })

    }]);