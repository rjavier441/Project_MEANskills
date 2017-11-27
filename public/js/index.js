(function() {
	angular.module('app', []).controller("login_page", function($scope) {
		$scope.login = function(user) {
			console.log(user.name)
			console.log(user.password)
		}

		$scope.createAccount = function() {
			console.log("createAccount")
		}
	})
})()