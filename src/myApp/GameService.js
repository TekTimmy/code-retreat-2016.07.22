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
        return $http.get(baseUrl + '/newgame');
    }

    function doAction(action) {
        return $http.get(baseUrl + '/' + action);
    }


});
