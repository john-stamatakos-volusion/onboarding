/**
 * @author Mario Harper
 * @description Module for handling onboarding navigation pane.
 */
'use strict';

var Onboarding = Onboarding || {};

Onboarding.Nav = (function(){

	// public
	var nav = {
		init: init,
		checkoffItem: checkoffItem
	}

	//private
	var _id;

	return nav;

	//////////////////////

	function init(params){
		_id = params.id || null;
		_position = $('')

	  $('.help-nav-launcher-button').click(function(){
	  	$('#help-nav .helper').attr("src", "");
	  	$('#help-nav .helper').attr("src", "https://d13yacurqjgara.cloudfront.net/users/291221/screenshots/1425333/helper.gif");
	  	if ($('#help-nav').hasClass('active')) {
	  		_closeSubNav(this, $(this).position(), $(this).outerWidth());
	  	}
	    $('#help-nav').toggleClass('active');
	  });

	  $('#help-nav .close').click(function(){
	    $('#help-nav').toggleClass('active');
	    $('#help-nav li').removeClass('active');
	    _closeSubNav(this, $(this).position(), $(this).outerWidth());
	  });

	  $('#help-nav li').click(function(){
	  	$('#help-nav li').removeClass('active');
    	$(this).addClass('active');
	    _subNav(this);
	  });

	  _setProgress();

	}

	/**
	 * Checks off an item in the side nav
	 * @param  {Object} element  DOM element to check off.
	 */
	function checkoffItem(element, save){
		var helpListItem = $(element);
		if(helpListItem.attr('checked')) return;

		helpListItem.children('.check-box').append('<i class="material-icons">check</i>');
		helpListItem.attr('checked', true);
	}

	/**
	 * Private function to load users current Onboarding Events progress in nav.
	 */
	function _setProgress(){
	  /* get the users current progress in onboarding */
  	Onboarding.Service.getProgress(_id, function(data){
  		console.log("events", data);
  		//checkoff the completed onboarding items
  		if(data){
  			for(var i = 0, x = data.length; i < x; i++){
  				var item = document.querySelector('[data-onboarding-item='+data[i].type+']');
  				Onboarding.Nav.checkoffItem(item);	
  			}
  		}
  	});
	}

	function _subNav(element) {

		var position = $(element).position();
		var width = $(element).outerWidth();
		var currentOpen = $(element).hasClass('open');
		var anyOpen = $('#help-nav li').hasClass('open');

		if(currentOpen){
			_closeSubNav(element, position, width);
		}
		else if(anyOpen){
			_closeSubNav(element, position, width, _openSubNav);
		}
		else {
			_openSubNav(element, position, width);
		}

	}

	function _closeSubNav(element, position, width, callback) {
		$('#help-nav li').removeClass('open');
		$( "#panel-subnav" ).animate({
			right: "-600px"
		}, 300, function() {
			$('#panel-subnav').css({
				top: position.top + "px",
				right: (position.right + width) + "px",
				height: "61px"
			});
			if(callback){
				callback(element, position, width);
			}
		});
	}

	function _openSubNav(element, position, width) {
		$('#panel-subnav').css({
			top: position.top + "px",
			right: (position.right + width) + "px"
		}).show(0, function() {
			$('#help-nav li').removeClass('open');
  		$(element).addClass('open');
			$( "#panel-subnav" ).animate({
		    right: "360px"
		  }, 300, function() {
		    $('#panel-subnav').animate({
		    	height: "100vh",
		    	top: "0"
		    }, 300);
		  });
		});

		_setPanelContent(element);

	}

	function _setPanelContent(element) {

		var content = document.getElementById(element.dataset.onboardingItem);

		if(content) {
			document.querySelector('#panel-subnav .container').innerHTML = content.innerHTML;
		}

	}


})();