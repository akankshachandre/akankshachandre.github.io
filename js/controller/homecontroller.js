angular.module('mywebsite')
.controller('homeCtrl',function($scope){
	$scope.aboutCollapsed = false;
	$scope.linkedInCollapsed = false;
	$scope.githubCollapsed = false;

	$scope.about = "I am hardworking,sincere,sarcastic and fun to be around";

	
	$scope.message = 'Nothing can bring you peace but yourself';
	$scope.hash = '3fec6363433eeb997722d07ad9e2d17c?s=80';


	$scope.linedIn = "https://www.linkedin.com/in/akanksha-akshay-chandre-008998106";
	$scope.github = "https://github.com/akankshachandre";

});