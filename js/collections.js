angular.module('collections', []);
angular.module('collections').config(['$controllerProvider',function($controllerProvider) {
  $controllerProvider.allowGlobals();
}]);

function ItemsController($scope) {
	$scope.items = [
		{id: 1, name: 'Item 1'},
		{id: 2, name: 'Item 2'},
		{id: 3, name: 'Item 3'},
		{id: 4, name: 'Item 4'}
	];

	$scope.destroy = function(item) {
		var index = $scope.items.indexOf(item);
		$scope.items.splice(index, 1);
	};
}

function ItemsPriceController($scope) {
	$scope.items = [
		{name: 'Coca', price: 10.5},
		{name: 'Papas', price: 30.25},
		{name: 'Cerveza', price: 35},
		{name: 'Mani', price: 18.4}
	]
}
