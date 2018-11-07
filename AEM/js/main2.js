$(document).ready(function(e) {
	//creating cookies
	//dynamic designs
			var getWindowHeight = $( window ).height();
			//var getWindowHeight = $( document ).height();
			var navBarHeight = $(".navbar ul li").height();
			//$(".bgimg-1").height(getWindowHeight + navBarHeight);
			//$(".left-staic-bar-home").height(getWindowHeight - navBarHeight);
			$(".staic-bar-home").height(getWindowHeight - navBarHeight);
			$(".body-content").hide();
			$(".menuLink").removeClass("menuActive");
			$(".right-staic-bar").css("height",getWindowHeight - navBarHeight);
			$(".left-staic-bar-articles").css("height",getWindowHeight - navBarHeight);
			$(".overlay").css("height",getWindowHeight - navBarHeight);
		
			$( window ).resize(function() {
					var getWindowHeight = $( window ).height();
					//var getWindowHeight = $( document ).height();
					var navBarHeight = $(".navbar ul li").height();
					//$(".bgimg-1").height(getWindowHeight + navBarHeight);
					$(".left-staic-bar-home").height(getWindowHeight - navBarHeight);
					$(".right-staic-bar-home").css("height",getWindowHeight - navBarHeight);
					$(".left-staic-bar-articles").css("height",getWindowHeight - navBarHeight);
					$(".overlay").css("height",getWindowHeight - navBarHeight);
				});

	$(".menuLink").on("click",function(){
		$(".bgimg-1").hide();
		$(".overlay").removeClass("activeOverlay");
		$(".overlay").addClass("disableOverlay");
		$(".body-content").show();
		$(".menuLink").removeClass("menuActive");
		$(this).addClass("menuActive");
		//dynamic menu
		var activeMenu = $(this).attr("id");
		if(activeMenu == "allsessions")
			{
				$(".category-title").removeClass("sessionHide");
				$(".category-title").addClass("sessionShow");
			}
		else if(activeMenu == "itMenu")
			{
				$(".category-title").removeClass("sessionHide");
				$(".category-title").addClass("sessionHide");
				$("#itTrans").addClass("sessionShow");
				$("#itTrans").removeClass("sessionHide");
			}
		else if(activeMenu == "digitalMenu")
			{
				$(".category-title").removeClass("sessionHide");
				$(".category-title").addClass("sessionHide");
				$("#digitalTrans").addClass("sessionShow");
				$("#digitalTrans").removeClass("sessionHide");
			}
		else if(activeMenu == "workForceMenu")
			{
				$(".category-title").removeClass("sessionHide");
				$(".category-title").addClass("sessionHide");
				$("#workForceTrans").addClass("sessionShow");
				$("#workForceTrans").removeClass("sessionHide");
			}
		else if(activeMenu == "securityMenu")
			{
				$(".category-title").removeClass("sessionHide");
				$(".category-title").addClass("sessionHide");
				$("#securityTrans").addClass("sessionShow");
				$("#securityTrans").removeClass("sessionHide");
			}
	});
	$(".static-sessions").on("click",function(){
		$(".overlay").removeClass("disableOverlay");
		$(".overlay").addClass("disableOverlay");
		$("#overlayVideo").removeClass("disableOverlay");
		$("#overlayVideo").addClass("activeOverlay");
		$(".main-right").addClass("main-col-right-position");

	});
	//$(".static-sessions").on("click",function(){
	$(".pdf-doc-content").on("click",function(){
		$(".overlay").removeClass("disableOverlay");
		$(".overlay").addClass("disableOverlay");
		$("#overlayArticle").removeClass("disableOverlay");
		$("#overlayArticle").addClass("activeOverlay");
		$(".main-right").addClass("main-col-right-position");

	});
	$(".close-btn").on("click",function(){
		$(".overlay").removeClass("activeOverlay");
		$(".overlay").addClass("disableOverlay");
		$(".main-right").removeClass("main-col-right-position");
	});
		$('.nav-btn').click(function(){
		if($('.nav-btn').hasClass('hide-nav')){
			$('.hid-nav').show(500);
			$(this).text('Hide');
			$('.nav-btn').removeClass('hide-nav');
			$('.nav-btn').addClass('show-nav');
		}else{
			$('.hid-nav').hide(500);
			$(this).text('Menu / '+$('.menuActive').text());
			$('.nav-btn').addClass('hide-nav');
			$('.nav-btn').removeClass('show-nav');
		}
	});
});