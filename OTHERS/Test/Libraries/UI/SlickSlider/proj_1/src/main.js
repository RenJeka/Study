var $ = require("jquery");
require("slick-carousel");

$(document).ready(function () {
	$(".slides").slick({
		arrows: true,
		dots: true,
	});
});