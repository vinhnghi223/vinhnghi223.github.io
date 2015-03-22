// -------------------------------- my-work.js --------------------------------
$('#back-to-top').hide();
//Animation while scrolling
$(window).scroll(function() {
  if ($(this).scrollTop()>1000){
      $('#back-to-top').fadeIn();
  }else{     
     $('#back-to-top').fadeOut();
  }
});
$("#back-to-top").click(function() {
    $('html,body').scrollTop(0);
});