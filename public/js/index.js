(function() {
	angular.module('app', ['ngAnimate']).controller("login_page", function($scope) {
		$scope.show_test = true;
		$scope.classes = [];
		$scope.skills = []

		$scope.login = function(user) {
			$.ajax({
				url:"/login",
				method:"POST", 
				data: {
					username: user.name,
					password: user.password
				},
				success: function(response) {
					console.log(`user ${user.name} succesfully logged in`)
				},
				error: function() {
					console.log('uh oh')
				}
			})
		}

		$scope.createAccount = async function(new_user) {
			//Check if user with that name already exists
			var user_exists = false
			await $.ajax({
				url:"/findDoc",
				method:"POST",
				data: {	
					"collection": "users",
	 				"search": {
	 					"username": new_user.name
 					}
				},
				success: function(response) {
					//convert response from string -> array
					response = JSON.parse(response)
					if (response.length != 0) {
						user_exists = true
						alert("That username is already in use.")	
					} 
				},
				error: function(err) {
					console.log(err.responseText)
				}
			})

			console.log("3: " + user_exists)
			//If user doesn't exist already, create user
			if (!user_exists) {
				$.ajax({
					url:"/writeNewDoc",
					method:"POST", 
					data: {
						collection: 'users',
						data: {
							username: new_user.name,
							password: new_user.password,
							skills: $scope.skills,
							classes: $scope.classes
						}
					},
					success: function(response) {
						console.log(`account created for ${new_user.name}.`)
					},
					error: function(err) {
						console.log(err.responseText)
					}
				})
			}
		}

		//Add class to array 'classes' on change
		$('#classes_dropdown li a').on('click', function(){
			var new_class = $(this).text()
		    if ($scope.classes.indexOf(new_class) == -1) {
		    	$scope.classes.push(new_class)
		    }
		    $scope.$apply();
		});

		//Add skill to array 'skills' on change
		$('#skills_dropdown li a').on('click', function(){
			var new_skill = $(this).text()
			if ($scope.skills.indexOf(new_skill) == -1) {
		    	$scope.skills.push(new_skill)
		    }
		    $scope.$apply();
		});

		//Remove class from array 'classes' on change
		$scope.removeClass = function() {
			var class_index = $scope.classes.indexOf(this.x)
			$scope.classes.splice(class_index, 1)
		}

		//Remove skill from array 'skills' on change
		$scope.removeSkill = function() {
			var skill_index = $scope.skills.indexOf(this.x)
			$scope.skills.splice(skill_index, 1)
		}

	})
})()