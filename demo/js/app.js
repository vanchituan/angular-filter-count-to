// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['countTo']);


myApp.controller('demoController', function ($scope) {

    $scope.countTo = 18200;
    $scope.countFrom = 0;
    $scope.filter = 'number';

    $scope.reCount = function () {
        $scope.countFrom = Math.ceil(Math.random() * 300);
        $scope.countTo = Math.ceil(Math.random() * 7000) - Math.ceil(Math.random() * 600);
    };

});
