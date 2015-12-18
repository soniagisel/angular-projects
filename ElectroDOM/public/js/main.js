var myModule = angular.module('myApp', ["ngRoute"]);

myModule.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'static/partials/home.html',
                controller: 'homeController'
            }).
            when('/productos', {
                templateUrl: 'static/partials/productos.html',
                controller: 'productController'
            }).
            when('/agregar-producto', {
                templateUrl: 'static/partials/agregar-producto.html',
                controller: 'addprodtController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

myModule.controller('homeController', ['$scope', function($scope) {
}]);


myModule.controller('productController', ['$scope', '$http', function($scope, $http) {

    $http({method: 'GET', url: '/getData'}).
        success(function(data, status, headers, config) {
            $scope.lista = data;
            
        }).
        error(function(data, status, headers, config) {
         
        });

    $scope.newitem = "";

    /*$scope.agregar = function () {
        $scope.lista.push({
            id: $scope.lista[$scope.lista.length -1].id + 1,
            value: $scope.newitem
        });
        $scope.newitem = "";
    };*/

    $scope.search = function() {

    };

    $scope.remove = function() {

    };
}]);


myModule.controller('addprodController', ['$scope', function($scope) {
    $scope.lista = [];
    $scope.newitem = "";

    $scope.agregar = function () {
        $scope.lista.push($scope.newitem);
        $scope.newitem = "";
    };
}]);