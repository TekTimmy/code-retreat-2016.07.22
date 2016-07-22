angular.module('myApp').directive('mainContainer', ['GameService',
    function (GameService) {
    'use strict';

    return {
        restrict: 'E',
        templateUrl: 'myApp/mainContainer/mainContainer.html',
        controller: function ($scope) {
            $scope.actions = GameService.action;

            $scope.newGame = function() {
                GameService.newGame().then(
                    function(response) {
                        $scope.data = response.data;
                    }
                );
            };

            $scope.doAction = function(action) {
                GameService.doAction(action).then(
                    function(response) {
                        $scope.data = response.data;
                    }
                );
            }

        }
    };
}]);
