$(function() {
	var endDate = new Date("August 17, 2017 23:59:59");
	var now = Date.now();

	console.log(endDate - now);
	var difference = endDate - now;
	difference /= 1000;
	var clock = $('.your-clock').FlipClock(difference, {
		clockFace: "DailyCounter",
		countdown: true
	});
});