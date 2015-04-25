'use strict';

angular.module('laManette', ['laManette.quiz']).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index', {
        templateUrl: 'index.html',
        controller: 'Controller'
    });

    $routeProvider.otherwise({ redirectTo: '/index' });
}]);
