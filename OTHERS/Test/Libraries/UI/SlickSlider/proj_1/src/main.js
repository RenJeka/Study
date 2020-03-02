var $ = require("jquery");
require("slick-carousel");

$(document).ready(function () {

	let $dotsContainer, $dots;

	$(".slides").slick({
		arrows: false,
		dots: true,
		appendDots: $("#navDots"),
	});


	$dots = $(".slick-dots button");
	$dots.eq(0).text("Font-end");
	$dots.eq(1).text("Java");
	$dots.eq(2).text("Dot net");


	
});