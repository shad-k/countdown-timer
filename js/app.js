$(function() {
	var status = localStorage.getItem("status");
	console.log(status);

	if(status === null) {
		status = "true";
		localStorage.setItem("status", "true");
	}
	
	// Making `status` false since "Friendship was saved" and I got Amazon Vouchers :-P
	status = "false";

	if(status === "true") {
		var endDate = new Date("August 17, 2017 23:59:59");
		var now = Date.now();

		var difference = endDate - now;
		difference /= 1000;
		var clock = $('.your-clock').FlipClock(difference, {
			clockFace: "DailyCounter",
			countdown: true
		});

		$(".killSwitch").click(function() {
			$(".modal").modal();
		});

		$(".checkPassword").click(function() {
			var password = $(".password").val();

			if(isPasswordCorrect(password)) {
				var html = "<h1> Yayy, friendship is saved!!</h1><iframe src='https://giphy.com/embed/l2Sqb0owUC5s5tz5m' frameBorder='0' class='giphy-embed gif' allowFullScreen></iframe>";
				$(".content").html(html);
				$(".modal").modal('toggle');
				localStorage.setItem("status", "false");
			} else {
				alert("You don't know the password! Get out of here!!")
				$(".modal").modal('toggle');
			}
		});
	} else if(status === "false") {
		var html = "<h1> Yayy, friendship is saved!!</h1><iframe src='https://giphy.com/embed/l2Sqb0owUC5s5tz5m' frameBorder='0' class='giphy-embed gif' allowFullScreen></iframe>";
		$(".content").html(html);
	}

	function isPasswordCorrect(password) {
		if(password === 'IamAwesome')
			return true;
		else
			return false;
	}
});
