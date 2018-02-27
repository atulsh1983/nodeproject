$(function() {
				
	var pull 		= $('#pull');
	menu 		= $('nav ul');
	menuHeight	= menu.height();
	var w = $(window).width();
	
	
	$(pull).on('click', function(e) {
					e.preventDefault();
					setValTop();					
					menu.slideToggle();
	});
	$(window).resize(function(){
		
	        		setValTop();
	        		if(w > 320 && menu.is(':hidden')) {
	        			menu.removeAttr('style');
	        		}
	});
	
	function setValTop()
	{
		var getTop = ($('#home').height().toFixed())-25;
		
		w = $(window).width();
		if(w<770)
		{
			$("#navTop").css("width",w);
			$("#navTop").css({'top' : getTop + 'px'});
		}
		else
		{
			$("#navTop").removeAttr("style")
		}
		return true;
	}
	
	
	
			
			
			
});