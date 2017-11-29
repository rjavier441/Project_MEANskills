(function() {
	angular.module('app', ['ngAnimate']).controller("login_page", function($scope) {
		$scope.show_test = true;
		$scope.classes = [];
		$scope.skills = []
		$scope.login = function(user) {
			// $.ajax({
			// 	url:"/login",
			// 	method:"POST", 
			// 	data: {
			// 		username: user.name,
			// 		password: user.password
			// 	},
			// 	success: function(response) {
			// 		console.log(response)
			// 		console.log(`user ${user.name} succesfully logged in`)
			// 	},
			// 	error: function() {
			// 		console.log('uh oh')
			// 	}
			// })
		}

		$scope.createAccount = function() {
			// $.ajax({
			// 	url:"/writeNewDoc",
			// 	method:"POST", 
			// 	data: {
			// 		collection: 'hey'
			// 	},
			// 	success: function(response) {
			// 		console.log(response)
			// 		console.log(`user ${user.name} succesfully logged in`)
			// 	},
			// 	error: function(err) {
			// 		console.log(err.responseText)
			// 	}
			// })
		}

		$('#classes_dropdown li a').on('click', function(){
			var new_class = $(this).text()
		    if ($scope.classes.indexOf(new_class) == -1) {
		    	$scope.classes.push(new_class)
		    }
		    $scope.$apply();
		});

		$('#skills_dropdown li a').on('click', function(){
			var new_skill = $(this).text()
			if ($scope.skills.indexOf(new_skill) == -1) {
		    	$scope.skills.push(new_skill)
		    }
		    $scope.$apply();
		});

		$scope.removeSkill = function() {
			var skill_index = $scope.skills.indexOf(this.x)
			$scope.skills.splice(skill_index, 1)
		}

		$scope.removeClass = function() {
			var class_index = $scope.classes.indexOf(this.x)
			$scope.classes.splice(class_index, 1)
		}
	})
})()