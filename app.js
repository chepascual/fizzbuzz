$(document).ready(function () {


	for (i = 1; i < 101; i++) {
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

});