'use strict';

var campDataLoder = angular.module('campDataLoder',[]);

 angular.module('campDataLoder')
    .factory('settingData', ['$http', function($http){

        return{

            get: function(){

                return $http.get('app/stubData/data.json').then(function(response){

                        return response.data;
                    },
                    function(){
                        alert('ERROR');

                    }
                );
            }
        };
    }]);