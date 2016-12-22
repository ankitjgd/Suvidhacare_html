/*global jQuery:false */
(function ($) {

	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
			$(".navbar-brand").addClass("reduce");
			$(".top-tagline-bar").addClass("collapse");

			$(".navbar-custom ul.nav ul.dropdown-menu").css("margin-top","11px");
		
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
			$(".navbar-brand").removeClass("reduce");
			$(".top-tagline-bar").removeClass("collapse");

			$(".navbar-custom ul.nav ul.dropdown-menu").css("margin-top","16px");
	
		}
	});
	jQuery('#hero-header').append('<a href="#wg-top" id="wg-toplink" class="scroll">&#xf107;</a>');
	$(".scroll").click(function(event) {
    event.preventDefault();
    $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 1000);
    } );
	//scroll to top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
			$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
			return false;
	});
	


	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			var nav = $($anchor.attr('href'));
			if (nav.length) {
			$('html, body').stop().animate({				
				scrollTop: $($anchor.attr('href')).offset().top				
			}, 1500, 'easeInOutExpo');
			
			event.preventDefault();
			}
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
	
	$(function(){
    $("#product-thumbs a").click(function(e){
        var href = $(this).attr("href");
        var zoom = $(this).attr("data-zoom");
        var headlin = $(this).attr("data-heading");
        $("#productbig-image a").attr("href", zoom);
        $("#productbig-image a").attr("data-title", headlin);
        $("#productbig-image img").attr("src", href);
		$(this).addClass('act-thumb').siblings().removeClass('act-thumb');
        e.preventDefault();
        return false;
    });
	});
	$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {event.preventDefault();$(this).ekkoLightbox();});
	
})(jQuery);
$(window).load(function() {
	$(".loader").delay(100).fadeOut();
	$("#page-loader").delay(100).fadeOut("fast");
});

	
