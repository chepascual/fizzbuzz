$(document).ready(function () {


	var userNumber = +prompt("Enter number from 1 to 100 to Fizz Bizz");

	var evalNumber = function (userNumber) {

	for (i = 1; i <= userNumber; i++) {
		var FB = i;
		var test3 = i % 3;
		var test5 = i % 5;

		if (test3 == 0 && test5 == 0 ) {
			FB = "fizzbuzz"
		}

		else if (test3 == 0) {
			FB = "fizz"
		}

		else if (test5 == 0) {
			FB = "buzz"
		}

		$("#num").append("<p> " + FB + " </p>");

		FB = "";

		}

	};

	if (userNumber) {

		evalNumber(userNumber);

	} else {
		alert("Please enter a number from 1 to 100");
	}

});