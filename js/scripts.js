$(document).ready(function() {
	//config
	$float_speed = 1500; //milliseconds
	$float_easing = "easeOutQuint";
	$menu_fade_speed = 500; //milliseconds
	$closed_menu_opacity = 0.75;

	//cache vars
	$side_menu = $("#side_menu");
	$side_menu_menu = $("#side_menu .menu");
	$side_menu_label = $("#side_menu .label");

	var menuPosition = {};

	$(window).load(function() {
		menuPosition = $('#side_menu').position().top;
	    if (!window.location.href.match("servicos")) { FloatMenu(); }
		$side_menu.hover(
			function(){ //mouse over
				$side_menu_label.fadeTo($menu_fade_speed, 1);
				$side_menu_menu.fadeIn($menu_fade_speed);
			}
		);
	});

	$(window).scroll(function () {
	    if (!window.location.href.match("servicos")) {
            FloatMenu();
        }
	});

	function FloatMenu(){
		var scrollAmount = $(document).scrollTop();
		var newPosition = menuPosition+scrollAmount;
		if($(window).height()<$side_menu.height()+$side_menu_menu.height()){
			$side_menu.css("top",menuPosition);
		} else {
			$side_menu.stop().animate({top: newPosition}, $float_speed, $float_easing);
		}
	}
});


$(document).ready(function() {
/* Image hover */
	$('.work_image img').hover(function(){
		$(this).animate({"opacity": "0.5"},{queue:true,duration:300});
	}, function() {
		$(this).animate({"opacity": "1"},{queue:true,duration:300});
	});

});

/* portfolio categories */
$(document).ready(function() {
	//When page loads...
	$(".cat_content").hide(); //Hide all content
	$("ul.pf_categories li:first").addClass("active").show();
	$(".cat_content:first").show(); //Show first category content
	$(".cat_informations_content:first").show(); //Show first category content

	//On Click Event
	$("ul.pf_categories li").click(function() {
		$("ul.pf_categories li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected category
		$(".cat_content").hide(); //Hide all content

		var activeCat = $(this).find("a").attr("href"); //Find the href attribute value to identify the active category + content
		$(activeCat).fadeIn(); //Fade in the active ID content
		return false;
	});
});

Cufon.replace('h1, h2, h3, h4, h5, h6, .page_title, .page_title_subhead, .menu_item', { fontFamily: 'Comfortaa', hover: true });

$(document).ready(function(){
		$(".hidden_article_container").hide();
		$("div.read_more_link").click(function(){
			$(this).toggleClass("active").next().slideToggle("slow");
		});
});

$(document).ready(function(){
	//Examples of how to assign the ColorBox event to elements
	$("a[rel='crbox']").colorbox();
	$("a[rel='pf_item']").colorbox();
	$(".video-crbox").colorbox({iframe:true, innerWidth:640, innerHeight:510});
	$(".iframe-crbox").colorbox({width:"80%", height:"80%", iframe:true});
});

//scroll page to id
function GoToId(IdToGo) {
	var animSpeed = 1500; //animation speed
	var easeType = "easeInOutExpo"; //easing type
	if ($.browser.webkit) { //webkit browsers do not support animate-html
		$("body").stop().animate({scrollTop: $(IdToGo).offset().top}, animSpeed, easeType);
	} else {
		$("html").stop().animate({scrollTop: $(IdToGo).offset().top}, animSpeed, easeType);
	}
};

$(document).ready(function(){
	$('.box_skitter_slider').skitter({dots: true});
	$('.box_skitter_slider_post').skitter({dots: true});
});
