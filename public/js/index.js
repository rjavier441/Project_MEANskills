var angular = require('angular')

$(document).ready(() => {
	login_page.init()
});

var login_page = {
	settings: {
		app: angular.module('myApp', [])
	}, 

	init: function() {
		setDebug(true);
		$(document).off("keyup").on("keyup", function (event) {
			var enterPressed = pressingKey(KEY_ENTER, event);	// checks for enter key press
			if (enterPressed) {
				console.log("pressed ENTER");
				//User info in post currently has placeholder values.
				post("login", {
					"name": "hello",
					"password": "world"
				}, function (data,status,xhr) {
					console.log(data);
					console.log(status);
					console.log(xhr);
				});
			}
		});
	},
}

	