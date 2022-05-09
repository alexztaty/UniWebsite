$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#anchor');
   var offset = startchange.offset();

    if (startchange.length){
   $(document).scroll(function() { 
      var distance = $(window).width();
   console.log(distance);
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top + 85) {
          $('.sticky').css('position', 'fixed');
          $('.sticky').css('top', '0');
          $('.sticky').css('z-index', '10000');
       } 
	   if(scroll_start < offset.top + 85) {
          $('.sticky').css('position', 'absolute');
          $('.sticky').css('top', '0');
          $('.sticky').css('z-index', '10000');
       } 
   });
    }
});
