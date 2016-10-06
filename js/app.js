var app = angular.module('mywebsite',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('home',{
		url:'/home',
		//templateUrl:'home.html',
		controller:'homeCtrl'
	});
});