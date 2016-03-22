var embedCode = '<iframe src="https://www.youtube.com/embed/-CpvBYE-rd8?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'

// owlcarousel
$(document).ready(function(){
    $("#homebanner").owlCarousel({
		loop:true,
        items : 1,
        nav:true,
        navText: [ '', '' ],
        navClass: [ 'owl-prev1', 'owl-next1' ],
    });
});
$(document).ready(function(){
    $("#app").owlCarousel({
		loop:true,
        items : 1,
    });
});

// menu none
$(".btn_menu").on("click",function(){
    if($(".nav ul li").css('display') == 'block'){
        $(".nav ul li").css({
        display: "none",
        });
        $(".btn_menu").css({
        background: 'url("img/Menu.png") no-repeat 0px 0px',
        });    
    }
    else{
        $(".nav ul li").css({
        display: "block",
        });
        $(".btn_menu").css({
        background: 'url("img/Closed.png") no-repeat 0px 0px',
        });
    }    
});

// scroll yakorya
$(document).ready(function(){
	$("#nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
        top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

// scroll top
$(".goTop").on("click",function(){
    $("body").animate({
        scrollTop: 0,
    },1000);
});
$(window).on("scroll",function(){
    if($("body").scrollTop() > 3000){
            $(".goTop").fadeIn(200);
        }
        else{
            $(".goTop").fadeOut(200);
        }
});

// skroll-page
$(document).ready(function() {
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {
    };
});

// animate
new WOW().init();

// validate form
jQuery(function(){
    initFormValidation();
});

function initFormValidation(){
	jQuery('.form-validate').formValidation();
}

//scroll header
var $header = $("header");

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 ){
            $header.addClass("sticky");
        } else if($(this).scrollTop() <= 100 ) {
            $header.removeClass("sticky");
        }
    });

//modal window
$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
	$('input#go').click( function(event){ // лoвим клик пo ссылки с id="go"
		event.preventDefault(); // выключaем стaндaртную рoль элементa
		$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		 	function(){ // пoсле выпoлнения предъидущей aнимaции
				$('#modal_form') 
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('#overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	});
});