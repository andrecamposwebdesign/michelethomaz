angular.module('website', []).
	config(function($routeProvider) {

		$routeProvider.
			when('/home', {templateUrl:'templates/home.html'}).
			when('/services', {templateUrl:'templates/services.html'}).
			when('/midia', {templateUrl:'templates/midia.html'}).
			when('/modeling', {templateUrl:'templates/modeling.html'}).
			when('/cv', {templateUrl:'templates/cv.html'}).
			when('/cookies', {templateUrl:'templates/cookies.html'}).
			when('/flavours', {templateUrl:'templates/flavours.html'}).
			when('/contact', {templateUrl:'templates/contact-template.html'}).
			otherwise({redirectTo:'/home', templateUrl:'templates/home.html'});
	});


function MainCtrl($scope, $location) {
	$scope.setRoute = function(route) {
		$location.path(route);
	}
}

