'use strict';

angular.module('app')
.controller('locationCardCtrl', ['$scope', 'stubData', 'settingData',function ($scope, stubData, settingData){

        settingData.get().then(function(LoadedData) {
                 $scope.data = LoadedData.CAMPAIGNS[stubData].CAMPAIGN.SETTING.LOCATIONS;
            });
}])
    .directive('pphLocationCard', function(){

        return{
            scope:{
                card: '='
            },
            templateUrl:'templates/directives/LocationCard.html'

        };
    }
);
