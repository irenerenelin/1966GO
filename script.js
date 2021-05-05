$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 30)  {          /* 要滑動到選單的距離 */
       $('.dropdowns').addClass('navFixed');   /* 幫選單加上固定效果 */
    } else {
      $('.dropdowns').removeClass('navFixed'); /* 移除選單固定效果 */
    }
  });
});

var winW, 
    initVP, 
    newVP = "width=980"; 

$(document).on({ 
    ready: function(){ 
     winW = $(window).width(); 
    } 
}); 

$(window).on({ 
    load: function(){ 
     if (winW < 725) { setViewport(newVP); } 
    } 
}); 

function setViewport(content) { 
    $('meta[name=viewport]').attr('content',content); 
} 