//Smooth Scrolling
$(document).ready(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
//Back to top button
$(document).ready(function(){
 var a=1;
 $("#sidelink").hide();
  $("div.sidebar").click(function(){  
   
   if (a==1){
   a=0;
   $("#arrow").text(">");
   $("#sidelink").show();
   $("div.sidebar").animate({
      width:'100px'
    });
	}
	
	else {
   a=1;
   $("#arrow").text("<");
   $("#sidelink").hide();
   $("div.sidebar").animate({
      width:'30px'
    });
	}
	
  });
  
  
});
//mobile menu
$(function() {  
    var pull        = $('#pull');  
        menu        = $('nav ul');  
        menuHeight  = menu.height();  
  
    $(pull).on('click', function(e) {  
        e.preventDefault();  
        menu.slideToggle();  
    });  
});
$(window).resize(function(){  
    var w = $(window).width();  
    if(w > 320 && menu.is(':hidden')) {  
        menu.removeAttr('style');  
    }  
});
//Code line numbers
	$(function() {
	    var pre = document.getElementsByTagName('pre'),
	        pl = pre.length;
	    for (var i = 0; i < pl; i++) {
	        pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
	        var num = pre[i].innerHTML.split(/\n/).length;
	        for (var j = 0; j < num; j++) {
	            var line_num = pre[i].getElementsByTagName('span')[0];
	            line_num.innerHTML += '<span>' + (j + 1) + '</span>';
	        }
	    }
	})();

  
  
  
  
  
  
  
  
  
  
  
  