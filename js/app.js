angular.module('mywebsite',['ngRoute','ui.router']);

angular.module('mywebsite').config(function($stateProvider,$urlProvider){
	$stateProvider
	.state('home',{
		url:'/home',
		//templateUrl:'home.html',
		controller:'homeCtrl'
	});
});