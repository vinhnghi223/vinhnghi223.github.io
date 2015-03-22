// -------------------------------- about-me.js --------------------------------
var s = skrollr.init();
$("#avt").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide-2 .caption").offset().top+300
    }, 400);
});

$("#avt").hover(function() {
    $('#intro h1, #intro p').addClass("moving");
},function() {
    $('#intro h1, #intro p').removeClass("moving");
});

//Animation while scrolling
$(window).scroll(function() {
    //console.log($(this).scrollTop());
    //Slide 1
    if ($(this).scrollTop()>260){
        $('#slide-1 #intro').fadeOut();
     }else{
      $('#slide-1 #intro').fadeIn();
    }

    //Slide 2
    if ($(this).scrollTop()>1300){
        $('#slide-2 .caption').fadeOut();
    }else{     
        $('#slide-2 .caption').fadeIn();
    }

    //Slide 3
    if ($(this).scrollTop()>1450){
        $('#slide-3 .caption').fadeIn();
    }else{     
      $('#slide-3 .caption').fadeOut();
    }
 });