var app = angular.module('mywebsite',['ui.router','ui.bootstrap']);

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('home',{
		url:'/home',
		//templateUrl:'home.html',
		controller:'homeCtrl'
	})
	.state('about',{
		url:'/about',
		templateUrl:'../static/about.html',
		controller:'aboutCtrl'
	})
	.state('resume',{
		url:'/resume',
		//templateUrl:'../static/resume.html',
		controller:'resumeCtrl'
	})
});