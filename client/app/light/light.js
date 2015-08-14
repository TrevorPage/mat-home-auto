'use strict';

angular.module('homeautoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('light', {
        url: '/light',
        templateUrl: 'app/light/light.html',
        controller: 'LightCtrl'
      });
  });