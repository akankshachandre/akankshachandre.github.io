var app = angular.module('mywebsite');
app.controller('workexCtrl',,[$scope.function($scope){
	console.log("Hi");
	$scope.name = 'Akanksha';

	var exp1 = {
		company : 'Samsung Electronics America'
	};

	var exp2 = {
		company : 'Accenture Services Pvt Limited'
	};
	$scope.experiences.push({company : 'Samsung Electronics America'});
	$scope.experiences.push(exp2);
	console.log(JSON.stringify(exp1));
}]);