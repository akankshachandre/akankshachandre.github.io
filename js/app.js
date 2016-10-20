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
		templateUrl:'https://github.com/akankshachandre/akankshachandre.github.io/blob/master/Resume.pdf',
		controller:'resumeCtrl'
	})
	.state('workex',{
		url:'/workex',
		templateUrl:'../workex.html',
		controller:'homeCtrl'
	})
});