var app = angular.module('mywebsite',['ui.router','ui.bootstrap']);

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('home',{
		url:'/home',
		templateUrl:'index.html',
		controller:'homeCtrl'
	})
	.state('resume',{
		url:'/resume',
		templateUrl:'https://github.com/akankshachandre/akankshachandre.github.io/blob/master/Resume.pdf',
		controller:'resumeCtrl'
	})
	.state('workex',{
		url:'/workex',
		templateUrl:'/akankshachandre.github.io/static/workex.html',
		controller:'workexCtrl'
	})
});

app.controller('workexCtrl',function($scope){
	console.log("Hi");
	$scope.name = 'Akanksha';
	$scope.experiences = [];
	var exp1 = {
		company : 'Samsung Electronics America'
	};

	var exp2 = {
		company : 'Accenture Services Pvt Limited'
	};
	$scope.experiences.push({company : 'Samsung Electronics America'});
	$scope.experiences.push(exp2);
	console.log(JSON.stringify(exp1));
})