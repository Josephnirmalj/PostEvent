$(document).ready(function(e) {
	//cookie expires
	var date = new Date();
	var days = 365;
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var newdate = date.toGMTString();
	//page load cookie for page view count , increase every page refresh
	var getCookieOnload = getCookie("pageLoadView");
	if(getCookieOnload == ""){
		document.cookie = "pageLoadView="+1+";expires="+newdate+";path=/";
	}
	else{
		getCookieOnload++;
		document.cookie = "pageLoadView="+getCookieOnload+";expires="+newdate+";path=/";
	}
	//article load
	var getArticleLoad = getQueryStringParamValue();
	if(getArticleLoad != undefined){
		//console.log(getArticleLoad);
		if(getArticleLoad!= ""){
			var checkAssetType = getArticleLoad.split("_");
			//console.log(checkAssetType);
			if(checkAssetType[0] =="video"){
				articleVideo(getArticleLoad);
			}
			else{
				articlePDF(getArticleLoad);
			}
		}
		
	}
	else{
		//console.log("No Views");
	}
	//static designs
	$("body").addClass("overflow-active");
	$(".subnav-view .expand-mobile-menu span").text("Online");
	//dynamic designs
	var getWindowHeight = $( window ).height();
	var getWindowWidth = $( window ).width();
	//var getWindowHeight = $( document ).height();
	var getHeaderHeight = $("#header").height();
	var getStandardNavBarHeight = $(".subnav-view").height();
	var navBarHeight = $(".navbar ul li").height();
	var mobNavBarHeight = $(".navbar .nav-btn").height();
	$("#tt-content").css("margin-top",(getHeaderHeight+getStandardNavBarHeight));
	$(".staic-bar-home").height(getWindowHeight - navBarHeight);
	$(".category-title").removeClass("sessionShow");
	$(".category-title").addClass("sessionHide");
	$("#homePageLoad").removeClass("sessionHide");
	$("#homePageLoad").addClass("sessionShow");
	$(".menuLink").removeClass("menuActive");
	$(".right-staic-bar").addClass("controll-padding-home");
	$(".right-staic-bar").css("height",getWindowHeight - (navBarHeight+(getHeaderHeight+getStandardNavBarHeight)));
	$(".left-staic-bar").css("height",getWindowHeight - (navBarHeight+40+(getHeaderHeight+getStandardNavBarHeight)));
	$(".main-left").addClass("controll-static-section-mobileView");
	$(".overlayDell").css("height",getWindowHeight - (navBarHeight+(getHeaderHeight+getStandardNavBarHeight)));
	if(getWindowWidth<992){
		$(".overlayDell").css("top",(getHeaderHeight+getStandardNavBarHeight));
		
	}
	if(getWindowWidth<768){
		$(".overlayDell").css("height",getWindowHeight - (mobNavBarHeight+getHeaderHeight+getStandardNavBarHeight));

	}

	$( window ).resize(function() {
			getWindowWidth = $( window ).width();
			var getWindowHeight = $( window ).height();
			var navBarHeight = $(".navbar ul li").height();
			//var getWindowHeight = $( document ).height();
			var getHeaderHeight = $("#header").height();
			var getStandardNavBarHeight = $(".subnav-view").height();
			var mobNavBarHeight = $(".navbar .nav-btn").height();
			$("#tt-content").css("margin-top",(getHeaderHeight+getStandardNavBarHeight));
			$(".left-staic-bar-home").height(getWindowHeight - navBarHeight);
			$(".right-staic-bar-home").css("height",getWindowHeight - navBarHeight);
			$(".left-staic-bar").css("height",getWindowHeight - navBarHeight);
			$(".right-staic-bar").css("height",getWindowHeight - (navBarHeight+(getHeaderHeight+getStandardNavBarHeight)));
			$(".left-staic-bar").css("height",getWindowHeight - (navBarHeight+40+(getHeaderHeight+getStandardNavBarHeight)));
			$(".overlayDell").css("height",getWindowHeight - (navBarHeight+(getHeaderHeight+getStandardNavBarHeight)));
			$(".overlayDell").css("top",0);
			if(getWindowWidth<992){
				$(".overlayDell").css("top",(getHeaderHeight+getStandardNavBarHeight));
			}
			if(getWindowWidth<768){
				$(".overlayDell").css("height",getWindowHeight - (mobNavBarHeight+getHeaderHeight+getStandardNavBarHeight));
			}
		});

		//declaring main variables
		var visiorEmail="";
		var eloquaFormName="FY19Q3-APJ-SEA-DTF-Replay";
		var SiteID = "2502";
		var assetName ="";
		var regionalUpdate ="";
		//assign country
		if(window.location.href.indexOf("en-au") > -1) {
      		regionalUpdate = "Australia";
    	}
		if(window.location.href.indexOf("en-sg") > -1) {
      		regionalUpdate = "Singapore";
    	}
    	if(window.location.href.indexOf("hi-in") > -1) {
      		regionalUpdate = "India";
    	}
    	if(window.location.href.indexOf("ms-my") > -1) {
      		regionalUpdate = "Kuala Lumpur";
    	}
    	if(window.location.href.indexOf("ja-jp") > -1) {
      		regionalUpdate = "Japan";
    	}
		//video player settings			
		//videoctrl for plenery session 
		function plenaryVideo(loadVideoID){
				var myPlayer;
				videojs("myPlayerID").ready(function() {
				myPlayer = this;
				//volumeLevel = 0.5;
				myPlayer.catalog.getVideo(loadVideoID, function(error, video) {
					
				//Load the video object into the player
				myPlayer.catalog.load(video);

				myPlayer.customEndscreen({
				  "content": '<div class="endScreenVideo"><div class="article-buttons"><ul><li><a href="#" onclick="rewindArticles()"><button><i class="fa fa-repeat" aria-hidden="true"></i></i>Replay Video</button></a></li><li><button id="VideocontactUsPdf" onclick="contactus()"><a target="_blank"><i class="fa fa-phone"></i>Contact Us</a></button></li></ul></div></div>'
				    });
				 });
			});
		}
		function plenaryVideoPause(){
			var myPlayer;
			videojs("myPlayerID").ready(function() {
			myPlayer = this;
			myPlayer.pause();
			});
		}
		function plenaryVideoPlay(){
			var myPlayer;
			videojs("myPlayerID").ready(function() {
			myPlayer = this;
			myPlayer.play();
			});
		}
		//homeVideoCtrl();
		function homeVideoCtrl(){
				var myPlayer;
					videojs("myPlayerIDHome").ready(function() {
					 myPlayer = this;
					//console.log(myPlayer);
					myPlayer.pause();
				});
		}
					

		//Eloqua tracking scripts
		 var _elqQ = _elqQ || [];
		_elqQ.push(['elqSetSiteId', '2502']);
		_elqQ.push(['elqTrackPageView']);
		(function () {
		function async_load()
		{ 
			var s = document.createElement('script');
		    s.type = 'text/javascript'; s.async = true;
			s.src = 'https://img.en25.com/i/elqCfg.min.js';
			var x = document.getElementsByTagName('script')[0];
			x.parentNode.insertBefore(s, x);
		}
			if (window.addEventListener) window.addEventListener('DOMContentLoaded', async_load, false);
		   else if (window.attachEvent) window.attachEvent('onload', async_load); 
		   })
		();
		//lookup
		
		function conprepopulate() {
    		var DataLookupKey = escape('cc8ee27ecc2c4d56a7179327813d1b1c');
            var DataLookupString = '';
            var dt = new Date();
            var ms = dt.getMilliseconds();
            var SiteID = '2502';
            var PPS = '50';
            var lookupScript = "https://secure.eloqua.com/visitor/v200/svrGP?pps=50&siteid=2502&DLKey=" + DataLookupKey + "&DLLookup=" + DataLookupString + "&ms=" + ms;
            $.getScript(lookupScript, function () {
				try
					{  
					 	visiorEmail = GetElqContentPersonalizationValue('V_ElqEmailAddress');
					 	ajaxFormSubmit();
					//code that may throw exception  
					}
				catch(err)
					{
						visiorEmail="";
						ajaxFormSubmit();
					}  
			// return visiorEmail;
            });
        }
		//returns cookie email
		visiorEmail = conprepopulate();
		//blind form submission using ajax

		function ajaxFormSubmit(artCatogrey,artTitle){
			var videoCookie=getCookie("totalPDFDownloadVideo");
			var articleCookie=getCookie("totalPDFDownloadArticle");
			var viewVideoCookie=getCookie("totalShowVideo");
			var relatedArticles=getCookie("totalClicksRelatedArticle");
			var pageViewCount=getCookie("pageLoadView");
			if(videoCookie == ""){
				videoCookie=0;
			}
			if(articleCookie == ""){
				articleCookie=0;
			}
			if(viewVideoCookie == ""){
				viewVideoCookie=0;
			}
			if(relatedArticles == ""){
				relatedArticles=0;
			}
			var totalArticlesClicked = parseInt(videoCookie)+parseInt(articleCookie)+parseInt(viewVideoCookie)+parseInt(relatedArticles);
			var totalPDFDownlaod = parseInt(videoCookie)+parseInt(articleCookie)+parseInt(relatedArticles);
			var optinformSubmitted = getCookie("optinformSubmitted");
			if(optinformSubmitted ==""){
				if(totalArticlesClicked == 3){
					if(visiorEmail==""){
						$("#popupOverlayOptin").removeClass("hide");
					}
					else{
						$("#popupOverlayOptin").removeClass("hide");
						$("#optinEmail").val(visiorEmail);
						
					}
				}
				else{
					//console.log("no popup");
				}
			}
			var url = "//s2502.t.eloqua.com/e/f2?elqFormName="+eloquaFormName+"&elqSiteID="+SiteID+"&";
			var data = "emailAddress="+visiorEmail+"&assetName="+artTitle+"&assetCatogrey="+artCatogrey+"&viewedVideos="+viewVideoCookie+"&formSubmits="+totalPDFDownlaod+"&webVisit="+pageViewCount+"&relatedArticles="+relatedArticles+"&region="+regionalUpdate;
			$.ajax({
				url:url,
				type: "POST",
				data:data,
				crossDomain: true,
				success:function(type) {
					},
				error: function (xhr, type, exception){
					//alert("ajax error responsoe-"+type);
					}
				});
			}
			
			$("#optinBtn").on("click",function(){
			var videoCookie=getCookie("totalPDFDownloadVideo");
			var articleCookie=getCookie("totalPDFDownloadArticle");
			var viewVideoCookie=getCookie("totalShowVideo");
			var relatedArticles=getCookie("totalClicksRelatedArticle");
			var pageViewCount=getCookie("pageLoadView");
			if(videoCookie == ""){
				videoCookie=0;
			}
			if(articleCookie == ""){
				articleCookie=0;
			}
			if(viewVideoCookie == ""){
				viewVideoCookie=0;
			}
			if(relatedArticles == ""){
				relatedArticles=0;
			}
				var errmsg="";
				var email = $("#optinEmail").val();
				var optin = $("#optin").val();
				if(email == ""){
					$("#errOptin").text("Enter Email");
					errmsg='emapty';
				}
				else if(!checkemail(email)){
					$("#errOptin").text("Enter Valid Email");
					errmsg=errmsg+"errmsg";
				}
				else{
					$("#errOptin").text(" ");
				}
				if(document.getElementById("optin").checked == true){
					optin=1;
				}
				if(errmsg == ""){
					var url = "//s2502.t.eloqua.com/e/f2?elqFormName="+eloquaFormName+"&elqSiteID="+SiteID+"&";
					var data="emailAddress="+email+"&optin="+optin+"&viewedVideos="+videoCookie+"&formSubmits="+articleCookie+"&webVisit="+pageViewCount+"&relatedArticles="+relatedArticles+"&region="+regionalUpdate;
					$.ajax({
				url:url,
				type: "POST",
				data:data,
				crossDomain: true,
				success:function(type) {
					},
				error: function (xhr, type, exception){
					//alert("ajax error responsoe-"+type);
					}
				});

					$("#popupOverlayOptin").addClass("hide");
					document.cookie = "optinformSubmitted="+"yes"+";expires="+newdate+";path=/";
				}
				else{
					return false;
				}

			});
			//closing popup optin
			$(".form-close-btn-opt,#optnothanks").on("click",function(){
				$("#popupOverlayOptin").addClass("hide");
					document.cookie = "optinformSubmitted="+"no"+";expires="+newdate+";path=/";
			});
			//nav bar controlls
	$(".menuLink").on("click",function(){
		homeVideoCtrl();
		window.history.replaceState({}, document.title, "#" + "");
		$("#homePageLoad").addClass("sessionHide");
		$("#homePageLoad").removeClass("sessionShow");
		$(".main-left").removeClass("controll-static-section-mobileView");
		$(".right-staic-bar").removeClass("controll-padding-home");
		$(".overlayDell").removeClass("activeOverlay");
		$(".overlayDell").addClass("disableOverlay");
		$(".menuLink").removeClass("menuActive");
		$(".main-right").removeClass("main-col-right-position");
		$(".main-left").removeClass("forDisableMultiScroll");
		$(".right-staic-bar").removeClass("forDisableMultiScroll");
		$(this).addClass("menuActive");
		var activeMenu = $(this).attr("id");
		if(activeMenu == "allsessions")
			{
				$(".category-title").removeClass("sessionHide");
				$(".category-title").addClass("sessionShow");
				$("#homePageLoad").addClass("sessionHide");
				$("#homePageLoad").removeClass("sessionShow");
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
		else if(activeMenu == "sponsorMenu")
			{
				$(".category-title").removeClass("sessionHide");
				$(".category-title").addClass("sessionHide");
				$("#Sponsor").addClass("sessionShow");
				$("#Sponsor").removeClass("sessionHide");
			}
	});
		$('.nav-btn').click(function(){
		if($('.nav-btn').hasClass('hide-nav')){
			$('.hid-nav').show(500);
			$('.mobile-menu-down-div').show();
			$('.mobile-menu-up-div').hide();
			$('.nav-btn').removeClass('hide-nav');
			$('.nav-btn').addClass('show-nav');
		}else{
			$('.hid-nav').hide(500);
			$('.mobile-menu-down-div').hide();
			$('.mobile-menu-up-div').show();
			$('.mobile-menu-up-span').text($('.menuActive').text());
			$('.nav-btn').addClass('hide-nav');
			$('.nav-btn').removeClass('show-nav');
		}

	});
		$(".menuLink").on("click",function(){
			if(getWindowWidth < 768){
					if($('.nav-btn').hasClass('show-nav')){
						$('.hid-nav').hide(500);
						$('.mobile-menu-down-div').hide();
						$('.mobile-menu-up-div').show();
						$('.mobile-menu-up-span').text($('.menuActive').text());
						$('.nav-btn').addClass('hide-nav');
						$('.nav-btn').removeClass('show-nav');
					}
				}
			});

			//nav bar ends
	$(".video-doc-content").on("click",function(){
		var getVideoArticleIDClick = $(this).attr("id");
		articleVideo(getVideoArticleIDClick);
	});
	function articleVideo(getVideoArticleIDClick){
			var countV="";
			var countA="";
			var getVideoArticleID = getVideoArticleIDClick;
			document.cookie = getVideoArticleID + "="+1+";expires="+newdate+";path=/";
			document.cookie = "asset_name="+getVideoArticleID+";expires="+newdate+";path=/";
			var getCommonLength = $(".video-doc-content").length;
			for(var i=0;i<getCommonLength;i++)
			{
				var countVall = getCookie("video_"+i);
				if(countVall ==""){
					countVall = 0;
				}
				if(countV ==""){
					countV = 0;
				}
				countV = parseInt(countV)+parseInt(countVall);
			}
			document.cookie = "totalVideoView="+countV+";expires="+newdate+";path=/";	
		//adding url parameter for social sharing
		var getLocation = window.location;
		//remove parameter from url
		window.history.replaceState({}, document.title, "#" + "");
		//add parameter to URL
		window.history.pushState("","",getLocation+getVideoArticleID);
		$(".overlayDell").removeClass("disableOverlay");
		$(".overlayDell").addClass("disableOverlay");
		$("#overlayVideo").removeClass("disableOverlay");
		$("#overlayVideo").addClass("activeOverlay");
		$(".main-right").addClass("main-col-right-position");
		$(".main-left").addClass("forDisableMultiScroll");
		$(".right-staic-bar").addClass("forDisableMultiScroll");
		$("#overlayVideo #videoPlayerURL").removeClass("showVideoPlayer");
		if(getWindowWidth < 992){
			$(".right-staic-bar").removeClass("mobileLayoutAutoHeight");
		}
		var splitVideoID = getVideoArticleID.split("_");
		var arraySelectionID = splitVideoID[1];
		//video content popup from data js and var is datavideo
		$("#clickSrcTitle").val(dataVideo[arraySelectionID].videoHead);
		$("#clickSrcCat").val(dataVideo[arraySelectionID].videoCat);
		plenaryVideo(dataVideo[arraySelectionID].videoPlayerURL);
		$("#showVideoThum").attr("src",dataVideo[arraySelectionID].showVideoThum);
		$("#showVideoThum").removeClass();
		$("#showVideoThum").addClass(dataVideo[arraySelectionID].cookieForLeadVideo);
		//$("#videoPlayerURL").append(dataVideo[arraySelectionID].videoPlayerURL);
		$("#videoCat").text(dataVideo[arraySelectionID].videoCat);
		$("#videoHead").text(dataVideo[arraySelectionID].videoHead);
		$("#videoDate").text(dataVideo[arraySelectionID].videoDate);
		$("#videoContent").text(dataVideo[arraySelectionID].videoContent);
		$("#VideoDownload").attr("href",dataVideo[arraySelectionID].VideoDownload);
		$("#VideoDownload").removeClass();
		$("#VideoDownload").addClass(dataVideo[arraySelectionID].cookieForLead);
		$(".VideoSpeakerName1").text(dataVideo[arraySelectionID].VideoSpeakerName1);
		$(".VideoSpeakerDesc1").html(dataVideo[arraySelectionID].VideoSpeakerDesc1);
		$(".VideoSpeakerName2").text(dataVideo[arraySelectionID].VideoSpeakerName2);
		$(".VideoSpeakerDesc2").html(dataVideo[arraySelectionID].VideoSpeakerDesc2);
		$(".FBShareURL").attr("href",dataVideo[arraySelectionID].FBShareURL);
		$(".TwitterShareURL").attr("href",dataVideo[arraySelectionID].TwitterShareURL);
		$(".LinkedinShareURL").attr("href",dataVideo[arraySelectionID].LinkedinShareURL);
		$("#relVidIconUrl1").attr("href",dataVideo[arraySelectionID].relVidIconUrl1);
		$("#relVidIconImg1").attr("src",dataVideo[arraySelectionID].relVidIconImg1);
		$("#relVidIconTitle1").text(dataVideo[arraySelectionID].relVidIconTitle1);
		$("#relVidIconDecs1").text(dataVideo[arraySelectionID].relVidIconDecs1);
		$("#relVidIconUrl2").attr("href",dataVideo[arraySelectionID].relVidIconUrl2);
		$("#relVidIconImg2").attr("src",dataVideo[arraySelectionID].relVidIconImg2);
		$("#relVidIconTitle2").text(dataVideo[arraySelectionID].relVidIconTitle2);
		$("#relVidIconDecs2").text(dataVideo[arraySelectionID].relVidIconDecs2);
		$("#relVidIconUrl3").attr("href",dataVideo[arraySelectionID].relVidIconUrl3);
		$("#relVidIconImg3").attr("src",dataVideo[arraySelectionID].relVidIconImg3);
		$("#relVidIconTitle3").text(dataVideo[arraySelectionID].relVidIconTitle3);
		$("#relVidIconDecs3").text(dataVideo[arraySelectionID].relVidIconDecs3);
		$("#relVidIconUrl4").attr("href",dataVideo[arraySelectionID].relVidIconUrl4);
		$("#relVidIconImg4").attr("src",dataVideo[arraySelectionID].relVidIconImg4);
		$("#relVidIconTitle4").text(dataVideo[arraySelectionID].relVidIconTitle4);
		$("#relVidIconDecs4").text(dataVideo[arraySelectionID].relVidIconDecs4);
		$(".relVidThumb1").attr("id",dataVideo[arraySelectionID].relVidThumb1);
		//$(".relVidThumb1").addClass(dataVideo[arraySelectionID].relVidThumbOverlay1);
		$("#relVidThumbImg1").attr("src",dataVideo[arraySelectionID].relVidThumbImg1);
		$("#relVidThumbDate1").text(dataVideo[arraySelectionID].relVidThumbDate1);
		$("#relVidThumbDesc1").text(dataVideo[arraySelectionID].relVidThumbDesc1);
		$("#relVidThumbSpeaker1").text(dataVideo[arraySelectionID].relVidThumbSpeaker1);
		$(".relVidThumb2").attr("id",dataVideo[arraySelectionID].relVidThumb2);
		//$(".relVidThumb2").addClass(dataVideo[arraySelectionID].relVidThumbOverlay2);
		$("#relVidThumbImg2").attr("src",dataVideo[arraySelectionID].relVidThumbImg2);
		$("#relVidThumbDate2").text(dataVideo[arraySelectionID].relVidThumbDate2);
		$("#relVidThumbDesc2").text(dataVideo[arraySelectionID].relVidThumbDesc2);
		$("#relVidThumbSpeaker2").text(dataVideo[arraySelectionID].relVidThumbSpeaker2);
		ajaxFormSubmit(dataVideo[arraySelectionID].videoCat,dataVideo[arraySelectionID].videoHead);
		homeVideoCtrl();
		//content popup
	}

	$(".pdf-doc-content").on("click",function(){
		var getPDFArticleIDClick = $(this).attr("id");
		articlePDF(getPDFArticleIDClick);
	});
	function articlePDF(getPDFArticleIDClick){
		var countV="";
		var countA="";
		var getPDFArticleID = getPDFArticleIDClick;
		document.cookie = getPDFArticleID + "="+1+";expires="+newdate+";path=/";
		document.cookie = "asset_name="+getPDFArticleID+";expires="+newdate+";path=/";
		var getCommonLength = $(".pdf-doc-content").length;
			for(var i=0;i<getCommonLength;i++)
			{
				var countVall = getCookie("pdfArticle_"+i);
				if(countVall ==""){
					countVall = 0;
				}
				if(countA ==""){
					countA = 0;
				}

				countA = parseInt(countA)+parseInt(countVall);
			}
			document.cookie = "totalArticleView="+countA+";expires="+newdate+";path=/";
		//adding url parameter for social sharing
		var getLocation = window.location;
		//remove parameter from url
		window.history.replaceState({}, document.title, "#" + "");
		//add parameter to URL
		window.history.pushState("","",getLocation+getPDFArticleID);

		$(".overlayDell").removeClass("disableOverlay");
		$(".overlayDell").addClass("disableOverlay");
		$("#overlayArticle").removeClass("disableOverlay");
		$("#overlayArticle").addClass("activeOverlay");
		$(".main-right").addClass("main-col-right-position");
		$(".main-left").addClass("forDisableMultiScroll");
		$(".right-staic-bar").addClass("forDisableMultiScroll");
		if(getWindowWidth < 992){
			$(".right-staic-bar").removeClass("mobileLayoutAutoHeight");
		}
		var checkRelated = $("#"+getPDFArticleID).hasClass("hideRelated");
		if(checkRelated == true)
		{
			$("#overlayArticle .related-articles").hide();
		}
		else{
			$("#overlayArticle .related-articles").show();
		}
		var splitPdfID = getPDFArticleID.split("_");
		var arraySelectionID = splitPdfID[1];
		$("#clickSrcTitle").val(dataArticle[arraySelectionID].artMainHead);
		$("#clickSrcCat").val(dataArticle[arraySelectionID].artCat);
		$(".ArtFBUrl").attr("href",dataArticle[arraySelectionID].ArtFBUrl);
		$(".ArtTwitterUrl").attr("href",dataArticle[arraySelectionID].ArtTwitterUrl);
		$(".ArtLinkedinUrl").attr("href",dataArticle[arraySelectionID].ArtLinkedinUrl);
		$("#artSpeakerUrl").attr("src",dataArticle[arraySelectionID].artSpeakerUrl);
		$(".artSpeakerName1").text(dataArticle[arraySelectionID].artSpeakerName1);
		$(".artSpeakerDecs1").html(dataArticle[arraySelectionID].artSpeakerDecs1);
		$(".artSpeakerName2").text(dataArticle[arraySelectionID].artSpeakerName2);
		$(".artSpeakerDecs2").html(dataArticle[arraySelectionID].artSpeakerDecs2);
		$("#artCat").text(dataArticle[arraySelectionID].artCat);
		$("#artMainHead").text(dataArticle[arraySelectionID].artMainHead);
		$("#artDate").text(dataArticle[arraySelectionID].artDate);
		$("#artMainContent").text(dataArticle[arraySelectionID].artMainContent);
		$("#artDownload").attr("href",dataArticle[arraySelectionID].artDownload);
		$("#artDownload").removeClass();
		$("#artDownload").addClass(dataArticle[arraySelectionID].cookieForLead);
		$("#relArtIconUrl1").attr("href",dataArticle[arraySelectionID].relArtIconUrl1);
		$("#relArtIconUrl1").removeClass();
		$("#relArtIconUrl1").addClass(dataArticle[arraySelectionID].relArtClicksCookie1);
		$("#relArtIconImg1").attr("src",dataArticle[arraySelectionID].relArtIconImg1);
		$("#relArtIconTitle1").text(dataArticle[arraySelectionID].relArtIconTitle1);
		$("#relArtIconDecs1").text(dataArticle[arraySelectionID].relArtIconDecs1);
		$("#relArtIconUrl2").attr("href",dataArticle[arraySelectionID].relArtIconUrl2);
		$("#relArtIconUrl2").removeClass();
		$("#relArtIconUrl2").addClass(dataArticle[arraySelectionID].relArtClicksCookie2);
		$("#relArtIconImg2").attr("src",dataArticle[arraySelectionID].relArtIconImg2);
		$("#relArtIconTitle2").text(dataArticle[arraySelectionID].relArtIconTitle2);
		$("#relArtIconDecs2").text(dataArticle[arraySelectionID].relArtIconDecs2);
		$("#relArtIconUrl3").attr("href",dataArticle[arraySelectionID].relArtIconUrl3);
		$("#relArtIconUrl3").removeClass();
		$("#relArtIconUrl3").addClass(dataArticle[arraySelectionID].relArtClicksCookie3);
		$("#relArtIconImg3").attr("src",dataArticle[arraySelectionID].relArtIconImg3);
		$("#relArtIconTitle3").text(dataArticle[arraySelectionID].relArtIconTitle3);
		$("#relArtIconDecs3").text(dataArticle[arraySelectionID].relArtIconDecs3);
		$("#relArtIconUrl4").attr("href",dataArticle[arraySelectionID].relArtIconUrl4);
		$("#relArtIconUrl4").removeClass();
		$("#relArtIconUrl4").addClass(dataArticle[arraySelectionID].relArtClicksCookie4);
		$("#relArtIconImg4").attr("src",dataArticle[arraySelectionID].relArtIconImg4);
		$("#relArtIconTitle4").text(dataArticle[arraySelectionID].relArtIconTitle4);
		$("#relArtIconDecs4").text(dataArticle[arraySelectionID].relArtIconDecs4);
		$(".relArtThumb1").attr("id",dataArticle[arraySelectionID].relArtThumb1);
		//$(".relArtThumb1").addClass(dataArticle[arraySelectionID].relArtThumbOverlay1);
		$("#relArtThumbImg1").attr("src",dataArticle[arraySelectionID].relArtThumbImg1);
		$("#relArtThumbDate1").text(dataArticle[arraySelectionID].relArtThumbDate1);
		$("#relArtThumbDesc1").text(dataArticle[arraySelectionID].relArtThumbDesc1);
		$("#relArtThumbSpeaker1").text(dataArticle[arraySelectionID].relArtThumbSpeaker1);
		$(".relArtThumb2").attr("id",dataArticle[arraySelectionID].relArtThumb2);
		//$(".relArtThumb2").addClass(dataArticle[arraySelectionID].relArtThumbOverlay2);
		$("#relArtThumbImg2").attr("src",dataArticle[arraySelectionID].relArtThumbImg2);
		$("#relArtThumbDate2").text(dataArticle[arraySelectionID].relArtThumbDate2);
		$("#relArtThumbDesc2").text(dataArticle[arraySelectionID].relArtThumbDesc2);
		$("#relArtThumbSpeaker2").text(dataArticle[arraySelectionID].relArtThumbSpeaker2);
		ajaxFormSubmit(dataArticle[arraySelectionID].artCat,dataArticle[arraySelectionID].artMainHead);
		homeVideoCtrl();
	}
	//create cookie on pdf download
	$("#showVideoThum").on("click",function(){
		var countA="";
		var getClassName = $(this).attr("class");
		//var splitClass = getClassName.split(" ");
		document.cookie = getClassName + "="+1+";expires="+newdate+";path=/";
			var getCommonLength =  $(".video-doc-content").length;
			for(var i=0;i<getCommonLength;i++)
			{
				var countVall = getCookie("ShowVideo_"+i);
				if(countVall ==""){
					countVall = 0;
				}
				if(countA ==""){
					countA = 0;
				}

				countA = parseInt(countA)+parseInt(countVall);
			}
			document.cookie = "totalShowVideo="+countA+";expires="+newdate+";path=/";
			ajaxFormSubmit();
	});
	$("#VideoDownload").on("click",function(){
		var countA="";
		var getClassName = $(this).attr("class");
		document.cookie = getClassName + "="+1+";expires="+newdate+";path=/";
			var getCommonLength =  $(".video-doc-content").length;
			for(var i=0;i<getCommonLength;i++)
			{
				var countVall = getCookie("videoArticle_"+i);
				if(countVall ==""){
					countVall = 0;
				}
				if(countA ==""){
					countA = 0;
				}

				countA = parseInt(countA)+parseInt(countVall);
			}
			document.cookie = "totalPDFDownloadVideo="+countA+";expires="+newdate+";path=/";
			ajaxFormSubmit();
	});
	$("#artDownload").on("click",function(){
		var countA="";
		var getClassName = $(this).attr("class");
		document.cookie = getClassName + "="+1+";expires="+newdate+";path=/";
			var getCommonLength = $(".pdf-doc-content").length;
			for(var i=0;i<getCommonLength;i++)
			{
				var countVall = getCookie("pdfArticleLead_"+i);
				if(countVall ==""){
					countVall = 0;
				}
				if(countA ==""){
					countA = 0;
				}

				countA = parseInt(countA)+parseInt(countVall);
			}
			document.cookie = "totalPDFDownloadArticle="+countA+";expires="+newdate+";path=/";
			ajaxFormSubmit();
	});
	//create cookie when clicking related articles
	$("#relArtIconUrl1,#relArtIconUrl2,#relArtIconUrl3,#relArtIconUrl4").on("click",function(){
		var countA="";
		var getClassName = $(this).attr("class");
		var getElementID = $(this).attr("id");
		var getArticleTitle = $("#"+getElementID+" p").text();
		var getArticleCat = $("#"+getElementID+" h5").text();
		document.cookie = getClassName + "="+1+";expires="+newdate+";path=/";
			var getCommonLength = $(".related-articles .speaker-thumb .session-col-left").length;
			for(var i=0;i<getCommonLength;i++)
			{
				var countVall = getCookie("clicksRelatedArticle_"+i);
				if(countVall ==""){
					countVall = 0;
				}
				if(countA ==""){
					countA = 0;
				}

				countA = parseInt(countA)+parseInt(countVall);
			}
			document.cookie = "totalClicksRelatedArticle="+countA+";expires="+newdate+";path=/";
			ajaxFormSubmit(getArticleCat,getArticleTitle);
	});
	$(".showVideo").on("click",function(){
		$("#overlayVideo #videoPlayerURL").addClass("showVideoPlayer");
		plenaryVideoPlay();
	});
	$(".close-btn").on("click",function(){
		plenaryVideoPause();
		window.history.replaceState({}, document.title, "#" + "");
		$(".overlayDell").removeClass("activeOverlay");
		$(".overlayDell").addClass("disableOverlay");
		$(".main-right").removeClass("main-col-right-position");
		$(".main-left").removeClass("forDisableMultiScroll");
		$(".right-staic-bar").removeClass("forDisableMultiScroll");
		if(getWindowWidth < 991){
			$(".right-staic-bar").addClass("mobileLayoutAutoHeight");
		}
	});
	//scroll to top for related articles
		$('.speaker-thumb .pdf-doc-content,.pdf-doc-content').on("click",function(){
			$("#overlayArticle").animate({ scrollTop: 0 }, 600);
			$('html, body').animate({ scrollTop: 0 }, 600);
			 $('html, body').animate({
			        scrollTop: $("#overlayArticle").offset().top
			    }, 600);
		});
		// scroll to top for video
		$(".video-doc-content,.showVideo").on("click",function(){
			$("#overlayVideo").animate({scrollTop:0},600);
			$("html, body").animate({scrollTop:0},600);
			$("html, body").animate({
				scrollTop:$("#overlayVideo").offset().top
			},600);
		});
		// scroll to top for menu click
		$(".menuLink ").on("click",function(){
			if(getWindowWidth > 991){
				$(".right-staic-bar").animate({scrollTop:0},600);
				$("html, body").animate({scrollTop:0},600);
				$("html, body").animate({
					scrollTop:$(".right-staic-bar").offset().top
				},600);
			}

		});

		$(".videoPlayeBtn button").on("click",function(){
			$(this).parent().css("display","none");
			$("#playerContainer").css("display","block");
		});
		$("#contactUsVideo,#contactUsPdf").on("click",function(){
			$("#popupOverlay").removeClass("hide");
		});
		$(".form-close-btn").on("click",function(){
			$("form").css("display","block");
			$(".formSuccessMessage").css("display","none");
			$("#popupOverlay").addClass("hide");
		});
		//form validation
		$("#btn-submit").on("click",function(){
			var errMsg="";
			var fname = $("#firstName").val();
			var lname = $("#lastName").val();
			var email = $("#emailAddress").val();
			var busPhone = $("#busPh").val();
			var company = $("#company").val();
			var jobTitle = $("#jobTitle").val();
			var country = $("#country").val();
			var comments = $("#comments").val();
			var clickSrcTitle = $("#clickSrcTitle").val();
			var clickSrcCat = $("#clickSrcCat").val();
			if(fname == ""){
				errMsg = "fn";
				$("#errfirstName").text("Enter your first name");
			}
			else{
				$("#errfirstName").text(" ");
			}
			if(lname == ""){
				errMsg = errMsg +"ln";
				$("#errlastName").text("Enter your last name");
			}
			else{
				$("#errlastName").text(" ");
			}
			if(email == ""){
				errMsg = errMsg + "email";
				$("#erremailAddress").text("Enter your Email address");
			}
			else if(!checkemail(email)){
				errMsg = errMsg + "valid email";
				$("#erremailAddress").text("Enter Valid Email address");
			}
			else{
				$("#erremailAddress").text(" ");
			}

			if(busPhone == " "){
				errMsg = errMsg +"ph empty";
				$("#errbusPh").text("Enter Phone Number");
			}
			else if(!mobileph(busPhone)){
				errMsg = errMsg +"ph valid";
				$("#errbusPh").text("Enter Valid 10 Digit Phone Number");
			}
			else{
				$("#errbusPh").text(" ");
			}
			if(company == ""){
				errMsg = errMsg +"company";
				$("#errcompany").text("Enter your company name");
			}
			else{
				$("#errcompany").text(" ");
			}
			if(jobTitle == ""){
				errMsg = errMsg +"jobTitle";
				$("#errjobTitle").text("Enter your Job Title ");
			}
			else{
				$("#errjobTitle").text(" ");
			}
			if(country == ""){
				errMsg = errMsg +"country";
				$("#errcountry").text("Select your country");
			}
			else{
				$("#errcountry").text(" ");
			}
			if(errMsg == ""){
				//console.log("success");
				//var url ="//s2502.t.eloqua.com/e/f2?elqFormName=19Q2-APJ-ANZ-DTF-PostEvent-Investigation-Gate&elqSiteID=2502";
				var data ="&firstName="+fname+"&lastName="+lname+"&emailAddress="+email+"&busPhone="+busPhone+"&company="+company+"&jobFunction1="+jobTitle+"&country="+country+"&clickSrcTitle="+clickSrcTitle+"&clickSrcCat="+clickSrcCat+"&region="+regionalUpdate+"&comments="+comments;
				$.ajax({
				url:"//s2502.t.eloqua.com/e/f2?elqFormName=FY19Q3-APJ-SEA-DTF-Replay-Contactus&elqSiteID=2502",
				type: "POST",
				data:data,
				crossDomain: true,
				complete: function(msg) 
				{
					$("form").hide(500);
					$(".formSuccessMessage").show(500);
					//console.log("success ajax");
				},
				error: function(xhr, textS, resp) {
					//console.log("Error ajax");		
				}
				});

			}
			else{
				return false;
			}
		});
	function checkemail(email) {
      var str = email;
      var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
      if (filter.test(str))
        return true;
      else {
        return false;
      }
    }
    function mobileph(busPhone) {
      var no = busPhone;
      if (no.length == 10) {
        return true;
      } else {
        return false;
      }
    }
    function getCookie(cname) {
			    var name = cname + "=";
			    var decodedCookie = decodeURIComponent(document.cookie);
			    var ca = decodedCookie.split(';');
			    for(var i = 0; i < ca.length; i++) {
			        var c = ca[i];
			        while (c.charAt(0) == ' ') {
			            c = c.substring(1);
			        }
			        if (c.indexOf(name) == 0) {
			            return c.substring(name.length, c.length);
			        }
			    }
			    return "";
	}
	function getQueryStringParamValue() {
		var strURL = document.location.href;
		var pathArray = strURL.split('#');
		var segment = pathArray[1];
		return segment;
	} 
});