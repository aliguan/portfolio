$(document).ready( function() {

$('.greetingbox').fadeIn(1850);
// Preloading images
var images = ['images/bg.jpg',
        'images/gowander.png',
        'images/harry.png',
        'images/spotifriend.jpg',
        'images/worksbanner.jpg',
        'images/worksbanner.jpg',
        'images/worksbanner.jpg',
        'images/worksbanner.jpg'];

for (i = 0; i < images.length; i++) {
    var img = new Image();
    img.src = images[i];
}


var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    $('.bg').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {
    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;
});

moveBackground();

// Show Projects Div
// $('.projects, #navworks').on('click', (e) => {
//
//     $('#works').addClass('show');
//     setTimeout( function() {
//     closeNav();
//     $('#works').stop().animate({
//            top: 0,
//            bottom: 0,
//            position: 'absolute',
//        }, 1600, 'easeOutQuint'
//    );
//     }, 500);
//     setTimeout( () => {
//         $('.worksheader').fadeIn('slow');
//     }, 700);
// });
//
// $('#hideworks').on('click', (e) => {
//     $('#works').removeAttr('style');
//     $('#works').removeClass('show');
//     $('.worksheader').fadeOut('slow');
//     $('#works').stop().animate({
//         bottom: -200+'vh',
//         position: 'static',
//     }, 2000, 'easeOutQuint'
//    );
// });

// Filter Portfolio

$(function() {
	var selectedClass = "";
		$(".fil-cat").click(function(){
		selectedClass = $(this).attr("data-rel");
     $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300);

	});
});

$('#about').on('click', (e) => {
    $('html,body').animate({
    scrollTop: $('.scroller').offset().top},
    'slow');
});

$('#navworks').on('click', (e) => {
    $('html,body').animate({
    scrollTop: $('.aboutright').offset().top},
    'slow');
});

$('#worksbtn').on('click', (e) => {
    $('html,body').animate({
    scrollTop: $('.aboutright').offset().top},
    'slow');
});


//Open Individual works

function openWork(work, about) {
    var open = false;
    $(work).on('click', (e) => {
        if(open === false) {
            $(about).fadeToggle(600);
            $('html,body').animate({
           scrollTop: $('.poop').offset().top},
           'slow');

            $(work).stop().animate({
                height: '500px',
                opacity: 1,
            }, 200, 'easeOutQuint');

            $(work + 'h1').stop().animate({
               fontSize: '2em',
           }, 600, 'easeInQuint');
            open = true;
        } else {
            $(about).fadeToggle(600);
            $(work).stop().animate({
                height: '150px',
                opacity: 0.6,
            }, 200, 'easeOutQuint');
            $(work + 'h1').stop().animate({
               fontSize: '5em',
           }, 600, 'easeInQuint');
            open = false;
        }
        });
}

openWork('.spotifriend', '.aboutspot');
openWork('.gowander', '.aboutwander');
openWork('.triwizard', '.abouttri');

//ScrollMagic

var controller = new ScrollMagic.Controller();

var iconScene = new ScrollMagic.Scene ({
    triggerElement: '.process',
})
.setClassToggle('.svg', 'fade-in')
.addTo(controller);

var greetingScene = new ScrollMagic.Scene ({
    triggerElement: '.trigger',
})
.setClassToggle('.greeting', 'fade-out')
.addTo(controller);

var aboutScene = new ScrollMagic.Scene ({
    triggerElement: '.trigger',
})
.setClassToggle('.aboutleft', 'fade-in')
.addTo(controller);

var about2Scene = new ScrollMagic.Scene ({
    triggerElement: '.trigger',
})
.setClassToggle('.aboutleft2', 'fade-in')
.addTo(controller);

var aboutrightScene = new ScrollMagic.Scene ({
    triggerElement: '.aboutright',
})
.setClassToggle('.aboutright', 'fade-in')
.addTo(controller);




});

function openNav() {
    document.getElementById("sidenav").style.width = "325px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}
