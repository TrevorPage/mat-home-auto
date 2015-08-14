'use strict';

angular.module('homeautoApp')
    .controller('LightCtrl', function ($scope, $http) {
    
        $scope.message = 'Hello';
        
        $scope.setLightState = function(lightOn) {
            var query = lightOn ? "turnOn" : "turnOff" ; //"deviceID=87&name=turnOn" : "deviceID=87&name=turnOff" ;

        

            $http({
                method: 'GET',
                //url: 'http://Trev:test@77.99.3.84:7337/api/callAction?' + query
                url: 'api/delegates/' + query
            }).
            success(function(status) {
                console.log(status);
            }).
            error(function(status) {
                //your code when fails
            });
                            
        };
        
        $scope.setLightOn = function(){
            $scope.setLightState(true);
        };

        $scope.setLightOff = function(){
            $scope.setLightState(false);
        };
        
        $scope.test = function(){
            alert("test!");
        };
        
    });
