angular.module('mywebsite')
.controller('homeCtrl',function($scope){
	$scope.aboutCollapsed = false;

	$scope.about = "I am hardworking,sincere,sarcastic and fun to be around";

	$scope.isCollapsed = false;
	$scope.message = 'Nothing can bring you peace but yourself';
	$scope.hash = '3fec6363433eeb997722d07ad9e2d17c?s=80'

	$scope.github = "https://github.com/akankshachandre";

});