/*-----------------------------------------------------------------

Template Name: Innovatek - interior HTML Template
Author:  ThemeMascot
Author URI: https://themeforest.net/user/thememascot/portfolio
Developer: Kawser Ahmed Roni
Version: 1.0.0
Description: Innovatek - interior HTML5 Template

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. preloader
02. header
03. swiper slider
04. animated text with swiper slider
05. shop products count
06. image src change
07. hide & show a div
08. isotope
09. add class & remove class
10. magnificPopup
11. back to top
12. data backgrund
13. coundown by click
14. remove products
15. wow animation

------------------------------------------------------------------*/

(function ($) {
	("use strict");

	// Preloader area start here ***
	var windowOn = $(window);
	windowOn.on("load", function () {
		$("#loading").fadeOut(500);
	});
	// Preloader area end here ***

	// Header area start here ***
	// Mobile menu
	$(".header-area nav").meanmenu();

	// Menu Fixed
	var fixed_top = $(".header-area");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 50) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
		}
	});
	// Header area end here ***

	// Gsap Animation area start here ***
	// $(function () {
	// 	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	// 	ScrollTrigger.normalizeScroll(false);

	// 	let smoother = ScrollSmoother.create({
	// 		smooth: 2,
	// 		effects: true,
	// 		content: ".ScrollSmoother-content",
	// 	});
	// });
	// Gsap Animation area end here ***

	// Mouse move paralax area end here ***
	if ($(window).width() > 780) {
		$(".paralax__animation").mousemove(function (e) {
			$("[data-depth]").each(function () {
				var depth = $(this).data("depth");
				var amountMovedX = (e.pageX * -depth) / 4;
				var amountMovedY = (e.pageY * -depth) / 4;

				$(this).css({
					transform:
						"translate3d(" +
						amountMovedX +
						"px," +
						amountMovedY +
						"px, 0)",
				});
			});
		});
	}
	// Mouse move paralax area end here ***

	// Type text area start here ***
	$(document).ready(function () {
		const words = ["Developer", "Desinger", "Companies"];
		let index = 0;
		let letterIndex = 0;
		let direction = 1;
		let currentWord = words[0];
		let interval;

		function typeWriter() {
			const word = words[index];
			if (letterIndex < word.length) {
				$("#typing-text").text(
					$("#typing-text").text() + word.charAt(letterIndex)
				);
				letterIndex++;
			} else {
				clearInterval(interval);
				interval = setInterval(eraseText, 150); // Delay between typing and erasing
			}
		}

		function eraseText() {
			if (letterIndex >= 0) {
				const text = currentWord.substring(0, letterIndex);
				$("#typing-text").text(text);
				letterIndex--;
			} else {
				clearInterval(interval);
				index = (index + direction) % words.length;
				if (index < 0) index = words.length - 1;
				currentWord = words[index];
				interval = setInterval(typeWriter, 150); // Delay before typing next word
			}
		}

		interval = setInterval(typeWriter, 150); // Initial delay before typing starts
	});
	// Type text area end here ***

	// Hover over the elements with the class "service__item"
	$(".service__item").hover(
		// Function to run when the mouse enters the element
		function () {
			// Remove the "active" class from all elements
			$(".service__item").removeClass("active");
			// Add the "active" class to the currently hovered element
			$(this).addClass("active");
		}
	);
	// Hover add & remove js area end here ***

	// Background image area start here ***
	$("[data-background").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-background") + "  )"
		);
	});
	// Background image area end here ***

	// Video popup area start here ***
	$(".video-popup").magnificPopup({
		type: "iframe",
		iframe: {
			markup:
				'<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				"</div>",

			patterns: {
				youtube: {
					index: "youtube.com/",

					id: "v=",

					src: "https://www.youtube.com/embed/%id%?autoplay=1",
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1",
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed",
				},
			},

			srcAction: "iframe_src",
		},
	});
	// Video popup area end here ***

	// Coundawn area start here ***
	var targetDate = new Date("2024-07-12 00:00:00").getTime();
	var countdownInterval = setInterval(function () {
		var currentDate = new Date().getTime();
		var remainingTime = targetDate - currentDate;

		if (remainingTime <= 0) {
			clearInterval(countdownInterval);
			// Display a message or perform any action when the countdown timer reaches zero
			$("#countdown-container").text("Countdown has ended!");
		} else {
			var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
			var hours = Math.floor(
				(remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			var minutes = Math.floor(
				(remainingTime % (1000 * 60 * 60)) / (1000 * 60)
			);
			var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

			// Pad single-digit values with leading zeros
			$("#day").text(days.toString().padStart(2, "0"));
			$("#hour").text(hours.toString().padStart(2, "0"));
			$("#min").text(minutes.toString().padStart(2, "0"));
			$("#sec").text(seconds.toString().padStart(2, "0"));
		}
	}, 1000);
	// Coundawn area end here ***

	// Counter up area start here ***
	$(".count").counterUp({
		delay: 50,
		time: 1500,
	});
	// Counter up area end here ***

	// Back to top btn area start here ***
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$("#back-top").addClass("show");
		} else {
			$("#back-top").removeClass("show");
		}
	});
	$("#back-top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 800);
		return false;
	});
	// Back to top btn area end here ***

	// WOW Animatin area start here ***
	Splitting();
	wow = new WOW({
		animateClass: "animated",
		offset: 100,
	});
	wow.init();
	// WOW Animatin area start here ***
})(jQuery);
