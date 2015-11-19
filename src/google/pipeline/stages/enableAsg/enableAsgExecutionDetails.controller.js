'use strict';

let angular = require('angular');

module.exports = angular.module('spinnaker.core.pipeline.stage.enableAsg.gce.executionDetails.controller', [
  require('core'),
])
  .controller('gceEnableAsgExecutionDetailsCtrl', function ($scope, $stateParams, executionDetailsSectionService) {

    $scope.configSections = ['enableServerGroupConfig', 'taskStatus'];

    function initialize() {
      executionDetailsSectionService.synchronizeSection($scope.configSections);
      $scope.detailsSection = $stateParams.details;
    }

    initialize();

    $scope.$on('$stateChangeSuccess', initialize, true);

  });
