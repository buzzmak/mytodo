'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
    .controller('MainCtrl', function ($scope, localStorageService) {


        // keep todos persistent:
        var todosInStore = localStorageService.get('todos');

        $scope.todos = todosInStore && todosInStore.split('\n') || [];

        $scope.$watch('todos', function () {
            localStorageService.add('todos', $scope.todos.join('\n'));
        }, true);

        // add todos:
        $scope.addTodo = function () {
            $scope.todos.push($scope.todo);
            $scope.todo = '';
        };

        // store todos:
        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };
    });
