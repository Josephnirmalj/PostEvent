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
	$(".subnav-view .expand-mobile-menu span").text("講演動画・資料");
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
		var eloquaFormName="FY19Q3-APJ-JP-DTF-Replay";
		var SiteID = "2502";
		var assetName ="";
		var regionalUpdate ="";
		var submissionCount ="";
		var getRedirURL ="";
		var getRedirID ="";
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
				  "content": '<div class="endScreenVideo"><div class="article-buttons"><ul><li><a href="#" onclick="rewindArticles()"><button><i class="fa fa-repeat" aria-hidden="true"></i></i>もう一度見る</button></a></li><li><button id="VideocontactUsPdf" onclick="contactus()"><a target="_blank"><i class="fa fa-phone"></i>お問合せ</a></button></li></ul></div></div>'
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
			//closing popup optin
			$(".form-close-btn-opt").on("click",function(){
				$("#popupOverlayOptin").addClass("hide");
					//document.cookie = "optinformSubmitted="+"no"+";expires="+newdate+";path=/";
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
				$("#sponsor-logos").removeClass("sessionHide").addClass("sessionShow");
			}
		else if(activeMenu == "digitalMenu")
			{
				$(".category-title").removeClass("sessionHide");
				$(".category-title").addClass("sessionHide");
				$("#digitalTrans").addClass("sessionShow");
				$("#digitalTrans").removeClass("sessionHide");
				$("#sponsor-logos").removeClass("sessionHide").addClass("sessionShow");
			}
		else if(activeMenu == "workForceMenu")
			{
				$(".category-title").removeClass("sessionHide");
				$(".category-title").addClass("sessionHide");
				$("#workForceTrans").addClass("sessionShow");
				$("#workForceTrans").removeClass("sessionHide");
				$("#sponsor-logos").removeClass("sessionHide").addClass("sessionShow");
			}
		else if(activeMenu == "securityMenu")
			{
				$(".category-title").removeClass("sessionHide");
				$(".category-title").addClass("sessionHide");
				$("#securityTrans").addClass("sessionShow");
				$("#securityTrans").removeClass("sessionHide");
				$("#sponsor-logos").removeClass("sessionHide").addClass("sessionShow");
			}
		else if(activeMenu == "sponsorMenu")
			{
				$(".category-title").removeClass("sessionHide");
				$(".category-title").addClass("sessionHide");
				$("#Sponsor").addClass("sessionShow");
				$("#Sponsor").removeClass("sessionHide");
				$("#sponsor-logos").removeClass("sessionHide").addClass("sessionShow");
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
		//$("#clickSrcTitle-jp").val(dataVideo[arraySelectionID].videoHead);
		//$("#clickSrcCat-jp").val(dataVideo[arraySelectionID].videoCat);
		$("#clickSrcTitle").val(dataVideo[arraySelectionID].videoHead);
		$("#clickSrcCat").val(dataVideo[arraySelectionID].videoCat);
		plenaryVideo(dataVideo[arraySelectionID].videoPlayerURL);
		$("#showVideoThum").attr("src",dataVideo[arraySelectionID].showVideoThum);
		$("#showVideoThum").removeClass();
		$("#showVideoThum").addClass(dataVideo[arraySelectionID].cookieForLeadVideo);
		//$("#videoPlayerURL").append(dataVideo[arraySelectionID].videoPlayerURL);
		$("#videoCat").text(dataVideo[arraySelectionID].videoCat);
		$("#videoHead").html(dataVideo[arraySelectionID].videoHead);
		$("#videoDate").text(dataVideo[arraySelectionID].videoDate);
		$("#videoContent").text(dataVideo[arraySelectionID].videoContent);
		$("#VideoDownload").attr("data-url",dataVideo[arraySelectionID].VideoDownload);
		$("#VideoDownload").removeClass();
		$("#VideoDownload").addClass(dataVideo[arraySelectionID].cookieForLead);
		$(".VideoSpeakerName1").text(dataVideo[arraySelectionID].VideoSpeakerName1);
		$(".VideoSpeakerDesc1").html(dataVideo[arraySelectionID].VideoSpeakerDesc1);
		$(".VideoSpeakerName2").text(dataVideo[arraySelectionID].VideoSpeakerName2);
		$(".VideoSpeakerDesc2").html(dataVideo[arraySelectionID].VideoSpeakerDesc2);
		$(".FBShareURL").attr("href",dataVideo[arraySelectionID].FBShareURL);
		$(".TwitterShareURL").attr("href",dataVideo[arraySelectionID].TwitterShareURL);
		$(".LinkedinShareURL").attr("href",dataVideo[arraySelectionID].LinkedinShareURL);
		
		$("#relVidIconUrl1").attr("data-url",dataVideo[arraySelectionID].relVidIconUrl1);
		$("#relVidIconUrl1").removeClass();
		$("#relVidIconUrl1").addClass(dataVideo[arraySelectionID].relVidClicksCookie1);
		$("#relVidIconImg1").attr("src",dataVideo[arraySelectionID].relVidIconImg1);
		$("#relVidIconTitle1").text(dataVideo[arraySelectionID].relVidIconTitle1);
		$("#relVidIconDecs1").text(dataVideo[arraySelectionID].relVidIconDecs1);

		$("#relVidIconUrl2").attr("data-url",dataVideo[arraySelectionID].relVidIconUrl2);
		$("#relVidIconUrl2").removeClass();
		$("#relVidIconUrl2").addClass(dataVideo[arraySelectionID].relVidClicksCookie2);
		$("#relVidIconImg2").attr("src",dataVideo[arraySelectionID].relVidIconImg2);
		$("#relVidIconTitle2").text(dataVideo[arraySelectionID].relVidIconTitle2);
		$("#relVidIconDecs2").text(dataVideo[arraySelectionID].relVidIconDecs2);

		$("#relVidIconUrl3").attr("data-url",dataVideo[arraySelectionID].relVidIconUrl3);
		$("#relVidIconUrl3").removeClass();
		$("#relVidIconUrl3").addClass(dataVideo[arraySelectionID].relVidClicksCookie3);
		$("#relVidIconImg3").attr("src",dataVideo[arraySelectionID].relVidIconImg3);
		$("#relVidIconTitle3").text(dataVideo[arraySelectionID].relVidIconTitle3);
		$("#relVidIconDecs3").text(dataVideo[arraySelectionID].relVidIconDecs3);

		$("#relVidIconUrl4").attr("data-url",dataVideo[arraySelectionID].relVidIconUrl4);
		$("#relVidIconUrl4").removeClass();
		$("#relVidIconUrl4").addClass(dataVideo[arraySelectionID].relVidClicksCookie4);
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
		var checkRelated = $("#"+getVideoArticleID).hasClass("hideRelated");
		if(checkRelated == true)
		{
			$("#VideoDownload").hide();
			$("#overlayVideo .related-articles").hide();
		}
		else{
			$("#VideoDownload").show();
			$("#overlayVideo .related-articles").show();
		}
		//ajaxFormSubmit(dataVideo[arraySelectionID].videoCat,dataVideo[arraySelectionID].videoHead);
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
		var splitPdfID = getPDFArticleID.split("_");
		var arraySelectionID = splitPdfID[1];
		$("#clickSrcTitle-jp").val(dataArticle[arraySelectionID].artMainHead);
		$("#clickSrcCat-jp").val(dataArticle[arraySelectionID].artCat);
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
		$("#artMainHead").html(dataArticle[arraySelectionID].artMainHead);
		$("#artDate").text(dataArticle[arraySelectionID].artDate);
		$("#artMainContent").html(dataArticle[arraySelectionID].artMainContent);
		$("#artDownload").attr("data-url",dataArticle[arraySelectionID].artDownload);
		$("#artDownload").removeClass();
		$("#artDownload").addClass(dataArticle[arraySelectionID].cookieForLead);
		$("#relArtIconUrl1").attr("data-url",dataArticle[arraySelectionID].relArtIconUrl1);
		$("#relArtIconUrl1").removeClass();
		$("#relArtIconUrl1").addClass(dataArticle[arraySelectionID].relArtClicksCookie1);
		$("#relArtIconImg1").attr("src",dataArticle[arraySelectionID].relArtIconImg1);
		$("#relArtIconTitle1").text(dataArticle[arraySelectionID].relArtIconTitle1);
		$("#relArtIconDecs1").text(dataArticle[arraySelectionID].relArtIconDecs1);
		$("#relArtIconUrl2").attr("data-url",dataArticle[arraySelectionID].relArtIconUrl2);
		$("#relArtIconUrl2").removeClass();
		$("#relArtIconUrl2").addClass(dataArticle[arraySelectionID].relArtClicksCookie2);
		$("#relArtIconImg2").attr("src",dataArticle[arraySelectionID].relArtIconImg2);
		$("#relArtIconTitle2").text(dataArticle[arraySelectionID].relArtIconTitle2);
		$("#relArtIconDecs2").text(dataArticle[arraySelectionID].relArtIconDecs2);
		$("#relArtIconUrl3").attr("data-url",dataArticle[arraySelectionID].relArtIconUrl3);
		$("#relArtIconUrl3").removeClass();
		$("#relArtIconUrl3").addClass(dataArticle[arraySelectionID].relArtClicksCookie3);
		$("#relArtIconImg3").attr("src",dataArticle[arraySelectionID].relArtIconImg3);
		$("#relArtIconTitle3").text(dataArticle[arraySelectionID].relArtIconTitle3);
		$("#relArtIconDecs3").text(dataArticle[arraySelectionID].relArtIconDecs3);
		$("#relArtIconUrl4").attr("data-url",dataArticle[arraySelectionID].relArtIconUrl4);
		$("#relArtIconUrl4").removeClass();
		$("#relArtIconUrl4").addClass(dataArticle[arraySelectionID].relArtClicksCookie4);
		$("#relArtIconImg4").attr("src",dataArticle[arraySelectionID].relArtIconImg4);
		$("#relArtIconTitle4").text(dataArticle[arraySelectionID].relArtIconTitle4);
		$("#relArtIconDecs4").text(dataArticle[arraySelectionID].relArtIconDecs4);
		$(".relArtThumb1").attr("id",dataArticle[arraySelectionID].relArtThumb1);
		//$(".relArtThumb1").addClass(dataArticle[arraySelectionID].relArtThumbOverlay1);
		$("#relArtThumbImg1").attr("src",dataArticle[arraySelectionID].relArtThumbImg1);
		$("#relArtThumbDate1").text(dataArticle[arraySelectionID].relArtThumbDate1);
		$("#relArtThumbDesc1").html(dataArticle[arraySelectionID].relArtThumbDesc1);
		$("#relArtThumbSpeaker1").text(dataArticle[arraySelectionID].relArtThumbSpeaker1);
		$(".relArtThumb2").attr("id",dataArticle[arraySelectionID].relArtThumb2);
		//$(".relArtThumb2").addClass(dataArticle[arraySelectionID].relArtThumbOverlay2);
		$("#relArtThumbImg2").attr("src",dataArticle[arraySelectionID].relArtThumbImg2);
		$("#relArtThumbDate2").text(dataArticle[arraySelectionID].relArtThumbDate2);
		$("#relArtThumbDesc2").html(dataArticle[arraySelectionID].relArtThumbDesc2);
		$("#relArtThumbSpeaker2").text(dataArticle[arraySelectionID].relArtThumbSpeaker2);
		if($("#"+getPDFArticleID).hasClass("hidere"))
		{
			$("#overlayArticle .hideheading").hide();
			$("#overlayArticle .hidecontent").hide();
		}
		else{
			$("#overlayArticle .hideheading").show();
			$("#overlayArticle .hidecontent").show();
		}
		//ajaxFormSubmit(dataArticle[arraySelectionID].artCat,dataArticle[arraySelectionID].artMainHead);
		homeVideoCtrl();
	}
	
	//create cookie on pdf download
	$("#showVideoThum").on("click",function(){
		var countA="";
		getRedirID = $(this).attr("id");
		var getClassName = $(this).attr("class");
		var getArticleTitle = $("#videoHead").text();
		var getArticleCat = $("#videoCat").text();
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
			formJp(getArticleCat,getArticleTitle,getClassName);
	});
	$("#VideoDownload").on("click",function(e){
		e.preventDefault();
		getRedirID = $(this).attr("id");
		getRedirURL = $(this).attr("data-url");
		var countA="";
		var getClassName = $(this).attr("class");
		var getArticleTitle = $("#videoHead").text();
		var getArticleCat = $("#videoCat").text();
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
			getClassName ="showForm";
			formJp(getArticleCat,getArticleTitle,getClassName);
	});
	$("#artDownload").on("click",function(e){
		e.preventDefault();
		getRedirID = $(this).attr("id");
		getRedirURL = $(this).attr("data-url");
		var countA="";
		var getClassName = $(this).attr("class");
		var getTitle = $("#artMainHead").text();
		var getCar = $("#artCat").text();
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
			getClassName ="showForm";
			formJp(getCar,getTitle,getClassName);
	});
	//create cookie when clicking related articles
	$("#relArtIconUrl1,#relArtIconUrl2,#relArtIconUrl3,#relArtIconUrl4,#relVidIconUrl1,#relVidIconUrl2,#relVidIconUrl3,#relVidIconUrl4").on("click",function(e){
		e.preventDefault();
		getRedirID = $(this).attr("id");
		getRedirURL = $(this).attr("data-url");
		var relatedArticlesForm = "";
		var countA="";
		var getClassName = $(this).attr("class");
		var getElementID = $(this).attr("id");
		var getArticleTitle = $("#"+getElementID+" p").text();
		var getArticleCat = $("#"+getElementID+" h5").text();
		document.cookie = getClassName + "="+1+";expires="+newdate+";path=/";
		var getCommonLength = dataArticle.length*4;
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
			if(getClassName == "clicksRelatedArticle_7"){
				getClassName ="showForm";
			}
			if(getClassName == "clicksRelatedArticle_39"){
				getClassName ="showForm";
			}
			formJp(getArticleCat,getArticleTitle,getClassName);
	});
	//optin form for jp
	function formJp(getArticleCat,getArticleTitle,getClassName){
		submissionCount = getCookie("downloadCtaClickCount");
		if(submissionCount ==""){
			submissionCount=1;
		}
		else{
			var getUserDetails =getCookie("userDetails");
			var decUserDetails = decodeURIComponent(getUserDetails);
			console.log(decUserDetails);
			assignValues(decUserDetails,getArticleCat,getArticleTitle);
			submissionCount++;
		}
		if(getClassName == "showForm"){
			if(submissionCount<3)
			{
				$("#popupOverlayOptin form").show();
				$("#popupOverlayOptin .formSuccessMessage").hide();
				$("#popupOverlayOptin").removeClass("hide");
				$('input:checkbox').prop('checked', false);
				$("#clickSrcCat-jp").val(getArticleCat);
				$("#clickSrcTitle-jp").val(getArticleTitle);
			}
			else{
				var getUserDetails =getCookie("userDetails");
				var decUserDetails = decodeURIComponent(getUserDetails);
				assignValues(decUserDetails,getArticleCat,getArticleTitle);
				$("#popupOverlayOptin").addClass("hide");
				$("#optin-us").prop("checked",true);
				$("#btn-submit-jp").click();
			}
		}
		else{
			formsubmitForJpUnbind(getArticleCat,getArticleTitle);
			if(getRedirID !="showVideoThum"){
				window.open(getRedirURL);
				$("#"+getRedirID).attr("href",getRedirURL);
			}
			else
			{
				$("#overlayVideo #videoPlayerURL").addClass("showVideoPlayer");
				plenaryVideoPlay();
			}
		}
	}
	function assignValues(decUserDetails,getArticleCat,getArticleTitle){
		var splitArray = decUserDetails.split("-");
		//console.log(splitArray);
		$("#firstName-jp").val(splitArray[0]);
		$("#emailAddress-jp").val(splitArray[1]);
		$("#busPh-jp").val(splitArray[2]);
		$("#company-jp").val(splitArray[3]);
		$("#jobTitle-jp").val(splitArray[4]);
		$("#department-jp").val(splitArray[5]);
		$("#entry_prefecture").val(splitArray[6]);
		$("#entry_zip1").val(splitArray[7]);
		$("#city").val(splitArray[8]);
		$("#streetname").val(splitArray[9]);
		$("#buildingname").val(splitArray[10]);
		$("#fax1-jp").val(splitArray[11]);
		$("#surname").val(splitArray[12]);
		$("#surname-spelt").val(splitArray[13]);
		$("#firstname-spelt").val(splitArray[14]);
		$("#sizeofcompany").val(splitArray[15]);
		//console.log("company-"+splitArray[15]);
		$("#comments-jp").val(splitArray[22]);
		$("#clickSrcTitle-jp").val(getArticleTitle);
		$("#clickSrcCat-jp").val(getArticleCat);
	}

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
			var lastname=$("#lstname").val();
			var name=$("#name").val();
            var clickSrcTitle = $("#clickSrcTitle").val();
			var clickSrcCat = $("#clickSrcCat").val();
			if(fname == ""){
				errMsg = "fn";
				$("#errfirstName").text("名をご記入ください");
			}
			else{
				$("#errfirstName").text(" ");
			}
			if(lname == ""){
				errMsg = errMsg +"ln";
				$("#errlastName").text("姓をご記入ください");
			}
			else{
				$("#errlastName").text(" ");
			}
			if(lastname == ""){
				errMsg = errMsg +"lname";
				$("#errlastname").text("姓（フリガナ）をご記入ください");
			}
			else{
				$("#errlastname").text(" ");
			}
			if(name == ""){
				errMsg = errMsg +"name";
				$("#errname").text("名（フリガナ）をご記入ください");
			}
			else{
				$("#errname").text(" ");
			}
			if(email == ""){
				errMsg = errMsg + "email";
				$("#erremailAddress").text("Eメールアドレスをご記入ください");
			}
			else if(!checkemail(email)){
				errMsg = errMsg + "valid email";
				$("#erremailAddress").text("正しいEメールアドレスをご記入ください");
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
				$("#errbusPh").text("電話番号をご記入ください");
			}
			else{
				$("#errbusPh").text(" ");
			}
			if(company == ""){
				errMsg = errMsg +"company";
				$("#errcompany").text("会社名をご記入ください");
			}
			else{
				$("#errcompany").text(" ");
			}
			if(jobTitle == ""){
				errMsg = errMsg +"jobTitle";
				$("#errjobTitle").text("部署名・役職をご記入ください");
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
				var data ="&firstName="+fname+"&lastName="+lname+"&emailAddress="+email+"&busPhone="+busPhone+"&company="+company+"&jobFunction1="+jobTitle+"&country="+country+"&clickSrcTitle="+clickSrcTitle+"&clickSrcCat="+clickSrcCat+"&region="+regionalUpdate+"&comments="+comments+"&lstname="+lastname+"&name="+name;
				$.ajax({
				url:"//s2502.t.eloqua.com/e/f2?elqFormName=FY19Q3-APJ-JP-DTF-Replay-Contactus&elqSiteID=2502",
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
		$("#btn-submit-jp").on("click",function(){
			var errMsg="";
			var fname = $("#firstName-jp").val();
			var email = $("#emailAddress-jp").val();
			var busPhone = $("#busPh-jp").val();
			var company = $("#company-jp").val();
			var jobTitle = $("#jobTitle-jp").val();
			var prefecture = $("#entry_prefecture").val();
			var zip = $("#entry_zip1").val();			
			var city = $("#city").val();
			var streetname = $("#streetname").val();
			var buildingname = $("#buildingname").val();
			var fax1 = $("#fax1-jp").val();
			var surname = $("#surname").val();
			var surname2 = $("#surname-spelt").val();
			var firstname2 = $("#firstname-spelt").val();
			var sizeofcompany = $("#sizeofcompany").val();
			var country = $("#country-jp").val();
			var comments = $("#comments-jp").val();
			var clickSrcTitle = $("#clickSrcTitle-jp").val();
			var clickSrcCat = $("#clickSrcCat-jp").val();
			var dept = $("#department-jp").val();
            var emailoptin = "";
			var partner = "";
			var emailin="";
			var communication=$("#communication").val();
			if(fname == ""){
				errMsg = "fn";
				$("#errfirstName-jp").text("名をご記入ください");
			}
			else{
				$("#errfirstName-jp").text(" ");
			}
			
			if(email == ""){
				errMsg = errMsg + "email";
				$("#erremailAddress-jp").text("Eメールアドレスをご記入ください");
			}
			else if(!checkemail(email)){
				errMsg = errMsg + "valid email";
				$("#erremailAddress-jp").text("正しいEメールアドレスをご記入ください");
			}
			else{
				$("#erremailAddress-jp").text(" ");
			}

			if(busPhone == " "){
				errMsg = errMsg +"ph empty";
				$("#errbusPh-jp").text("Enter Phone Number");
			}
			else if(!mobileph(busPhone)){
				errMsg = errMsg +"ph valid";
				$("#errbusPh-jp").text("電話番号をご記入ください");
			}
			else{
				$("#errbusPh-jp").text(" ");
			}
			if(company == ""){
				errMsg = errMsg +"company";
				$("#errcompany-jp").text("会社名をご記入ください");
			}
			else{
				$("#errcompany-jp").text(" ");
			}
			if(dept == ""){
				errMsg = errMsg +"dept";
				$("#errdepartment-jp").text("部署をご記入ください");
			}
			else{
				$("#errdepartment-jp").text(" ");
			}
			if(document.getElementById("optin-us").checked==false){		
				var optin="";
				errMsg = errMsg +"optin";
				$("#optin-jp").text("チェックマークをご記入ください。");	
			}
			else{
				var optins = $("#optin-us").val();
					$("#optin-jp").text("");
			}
			if(prefecture == ""){
				errMsg = errMsg +"prefecture";
				$("#errentry_prefecture-jp").text("都道府県をご記入ください");
			}
			else{
				$("#errentry_prefecture-jp").text(" ");
			}
			if(zip == ""){
				errMsg = errMsg +"zip";
				$("#errzip-jp").text("郵便番号をご記入ください");
			}
			else{
				$("#errzip-jp").text(" ");
			}
			if(city == ""){
				errMsg = errMsg +"city";
				$("#errcity-jp").text("市区郡をご記入ください");
			}
			else{
				$("#errcity-jp").text(" ");
			}
			if(streetname == ""){
				errMsg = errMsg +"streetname";
				$("#errstreetname-jp").text("町村番地名をご記入ください");
			}
			else{
				$("#errstreetname-jp").text(" ");
			}
			if(document.getElementById("emailoptin").checked==false)
			{
			document.getElementById("emailoptin").value="No";
			var emailoptin=$("#emailoptin").val();
			}
			else{
			document.getElementById("emailoptin").value="Yes";
			var emailoptin=$("#emailoptin").val();
			}
			if(document.getElementById("Partner").checked==false)
			{
			document.getElementById("Partner").value="No";
			var partner=$("#Partner").val();
			}
			else{
			document.getElementById("Partner").value="Yes";
			var partner=$("#Partner").val();
			}		
			if(surname == ""){
				errMsg = errMsg +"surname";
				$("#errsurname-jp").text("姓をご記入ください");
			}
			else{
				$("#errsurname-jp").text(" ");
			}
			if(surname2 == ""){
				errMsg = errMsg +"surname2";
				$("#errsurname-spelt-jp").text("姓（フリガナ）をご記入ください");
			}
			else{
				$("#errsurname-spelt-jp").text(" ");
			}
			if(firstname2 == ""){
				errMsg = errMsg +"firstname2";
				$("#errfirstname-spelt-jp").text("名（フリガナ）をご記入ください");
			}
			else{
				$("#errfirstname-spelt-jp").text(" ");
			}
			if(sizeofcompany == ""){
				errMsg = errMsg +"sizeofcompany";
				$("#sizeofcompany-jp").text("企業規模を選択してください");
			}
			else{
				$("#sizeofcompany-jp").text(" ");
			}
			
			if(country == ""){
				errMsg = errMsg +"country";
				$("#errcountry-jp").text("Select your country");
			}
			else{
				$("#errcountry-jp").text(" ");
			}
			if(errMsg == ""){
				var userDetails = fname+"-"+email+"-"+busPhone+"-"+company+"-"+jobTitle+"-"+dept+"-"+prefecture+"-"+zip+"-"+city+"-"+streetname+"-"+buildingname+"-"+fax1+"-"+surname+"-"+surname2+"-"+firstname2+"-"+sizeofcompany+"-"+country+"-"+clickSrcTitle+"-"+clickSrcCat+"-"+regionalUpdate+"-"+comments+"-"+optins+"-"+emailoptin+"-"+partner+"-"+emailin+"-"+communication;
				var encodeDetails = encodeURIComponent(userDetails);
				document.cookie="userDetails="+encodeDetails+";expires="+newdate+";path=/";
				formsubmitForJp(fname,email,busPhone,company,jobTitle,dept,prefecture,zip,city,streetname,buildingname,fax1,surname,surname2,firstname2,sizeofcompany,country,clickSrcTitle,clickSrcCat,regionalUpdate,comments,optins,emailoptin,partner,emailin,communication);
				if(getRedirID !="showVideoThum"){
					window.open(getRedirURL);
					$("#"+getRedirID).attr("href",getRedirURL);	
					$("#popupOverlayOptin form").hide(500);
					$("#popupOverlayOptin .formSuccessMessage").show(500);
				}
				else{
					$("#popupOverlayOptin form").hide();
					$("#popupOverlayOptin .formSuccessMessage").hide();
					$(".form-close-btn-opt").click();
					$("#overlayVideo #videoPlayerURL").addClass("showVideoPlayer");
					plenaryVideoPlay();
				}
				//alert(getRedirID);
			}
			else{
				return false;
			}
		});
		function formsubmitForJp(fname,email,busPhone,company,jobTitle,dept,prefecture,zip,city,streetname,buildingname,fax1,surname,surname2,firstname2,sizeofcompany,country,clickSrcTitle,clickSrcCat,regionalUpdate,comments,optins,emailoptin,partner,emailin,communication)
		{
			//alert("submit");
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
				document.cookie = "downloadCtaClickCount="+submissionCount+";expires="+newdate+";path=/";
				var faxCon = fax1;
				var data = "&assetName="+clickSrcTitle+"&assetCatogrey="+clickSrcCat+"&viewedVideos="+viewVideoCookie+"&formSubmits="+totalPDFDownlaod+"&webVisit="+pageViewCount+"&relatedArticles="+relatedArticles+"&region="+regionalUpdate+"&firstName="+fname+"&emailAddress="+email+"&busPhone="+busPhone+"&company="+company+"&jobFunction1="+jobTitle+"&department="+dept+"&country="+country+"&comments="+comments+"&prefecture="+prefecture+"&zip="+zip+"&city="+city+"&streetname="+streetname+"&buildingname="+buildingname+"&surname="+surname+"&surname2="+surname2+"&firstname2="+firstname2+"&sizeofcompany="+sizeofcompany+"&fax="+faxCon+"&optin="+optins+"&emailoptin="+emailoptin+"&Partner="+partner+"&emailin="+emailin+"&communication="+communication;
				$.ajax({
				url:"//s2502.t.eloqua.com/e/f2?elqFormName="+eloquaFormName+"&elqSiteID=2502",
				type: "POST",
				data:data,
				crossDomain: true,
				complete: function(msg) 
				{
					
				},
				error: function(xhr, textS, resp) {
					//console.log("Error ajax");		
				}
			});
		}
		function formsubmitForJpUnbind(getArticleCat,getArticleTitle){
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
			var data = "&emailAddress="+visiorEmail+"&assetName="+getArticleTitle+"&assetCatogrey="+getArticleCat+"&viewedVideos="+viewVideoCookie+"&formSubmits="+totalPDFDownlaod+"&webVisit="+pageViewCount+"&relatedArticles="+relatedArticles+"&region="+regionalUpdate;
				$.ajax({
				url:"//s2502.t.eloqua.com/e/f2?elqFormName="+eloquaFormName+"&elqSiteID=2502",
				type: "POST",
				data:data,
				crossDomain: true,
				complete: function(msg) 
				{
					
				},
				error: function(xhr, textS, resp) {
					//console.log("Error ajax");		
				}
			});
		}
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