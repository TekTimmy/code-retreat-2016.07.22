angular.module('myApp').service('GameServiceMockup', function($q) {
    var mockMode = true,
        testCycle = 0,
        testData = [
            [
                [0, 0, 0, 2],
                [0, 0, 0, 2],
                [2, 0, 0, 0],
                [2, 0, 0, 0]
            ],
            [
                [0, 0, 0, 2],
                [0, 0, 0, 2],
                [2, 0, 0, 0],
                [2, 0, 0, 0]
            ],
            [
                [0, 0, 0, 2],
                [2, 0, 0, 0],
                [0, 0, 0, 2],
                [2, 0, 0, 0]
            ],
            [
                [0, 0, 0, 2],
                [2, 2, 2, 0],
                [0, 0, 2, 2],
                [2, 0, 0, 0]
            ]
        ],
        actions = {
            LEFT: 'left',
            RIGHT: 'right',
            UP: 'up',
            DOWN: 'down'
        };

    return {
        newGame: newGame,
        doAction: doAction,
        action: actions
    };

    function newGame() {
        var defer = $q.defer();
        if(mockMode) {
            testCycle = 0;
            defer.resolve({
                state: 'normal',
                field: testData[testCycle],
                score: 0
            });
        } else {
            defer.reject('not implemented');
        }
        return defer.promise;
    }

    function doAction(action) {
        var defer = $q.defer();
        if(!actions.hasOwnProperty(action)) {
            console.warn('invalid action: ' + action);
        }
        if(mockMode) {
            if(testCycle >= testData.length) {
                testCycle = 0;
            }
            testCycle++;
            defer.resolve({
                state: 'normal',
                field: testData[testCycle],
                score: 0
            });
        } else {
            defer.reject('nope');
        }
        return defer.promise;

    }


});
