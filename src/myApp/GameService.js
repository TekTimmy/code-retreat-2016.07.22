angular.module('myApp').service('GameService', function($q, $http) {
    var actions = {
            LEFT: 'left',
            RIGHT: 'right',
            UP: 'up',
            DOWN: 'down'
        },
        baseUrl= 'http://localhost:8001/game';

    return {
        newGame: newGame,
        doAction: doAction,
        action: actions
    };

    function newGame() {
        var defer = $q.defer();
        $http.get(baseUrl + '/newgame').then(
            function(response) {
                defer.resolve(response.data);
            });
        return defer.promise;
    }

    function doAction(action) {
        var defer = $q.defer();
        $http.get(baseUrl + '/' + action).then(
            function(response) {
                defer.resolve(response.data);
            });
        return defer.promise;
    }


});
