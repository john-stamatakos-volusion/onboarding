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
	var _customerID;

	return nav;

	//////////////////////

	function init(params){
		_customerID = params.customerID || null;

	  $('.help-nav-launcher-button').click(function(){
	  	$('#help-nav .helper').attr("src", "");
	  	$('#help-nav .helper').attr("src", "https://d13yacurqjgara.cloudfront.net/users/291221/screenshots/1425333/helper.gif");
	    $('#help-nav').toggleClass('active');
	  });

	  $('#help-nav .close').click(function(){
	    $('#help-nav').toggleClass('active');
	  });

	  $('#help-nav li').click(function(){
	  	$('#help-nav li').removeClass('active');
    	$(this).addClass('active');
	    _subNav(this);
	  });

	  _setProgress();

	}

	/**
	 * Checks off an item in the side nav, also able to save the check to Onboarding database table.
	 * @param  {Object} element  DOM element to check off.
	 * @param  {[type]} save     Save to database?
	 */
	function checkoffItem(element, save){
		var helpListItem = $(element);
		if(helpListItem.attr('checked')) return;

		helpListItem.children('.check-box').append('<i class="material-icons">check_circle</i>');
		helpListItem.attr('checked', true);
		if(save === true){

			Onboarding.Service.setValue(_customerID, helpListItem.attr('data-onboarding-item'), true, function(data){
        console.log('Progress Saved');
      });
		}

	}

	/**
	 * Private function to load users current Onboarding Events progress in nav.
	 */
	function _setProgress(){
	  /* get the users current progress in onboarding */
  	Onboarding.Service.getProgress(_customerID, function(data){
  		//checkoff the completed onboarding items
  		if(data){
  			for(var i = 0, x = data.length; i < x; i++){
  				var item = document.querySelector('[data-onboarding-item='+data[i].Key+']');
  				Onboarding.Nav.checkoffItem(item);	
  			}
  		}
  	});
	}

	function _subNav(element) {

		var position = $(element).position();
		var width = $(element).outerWidth();
		var step = $(element).attr('data-onboarding-item');
		var currentOpen = $(element).hasClass('open');
		var anyOpen = $('#help-nav li').hasClass('open');

		if(currentOpen){
			closeSubNav(element, position, width);
		}
		else if(anyOpen){
			closeSubNav(element, position, width, openSubNav);
		}
		else {
			openSubNav(element, position, width);
		}

	}

	function closeSubNav(element, position, width, callback) {
		$('#help-nav li').removeClass('open');
		$( "#panel-subnav" ).animate({
			right: "-600px"
		}, 300, function() {
			$('#panel-subnav').css({
				top: position.top + "px",
				right: (position.right + width) + "px",
				height: "21px"
			});
			if(callback){
				callback(element, position, width);
			}
		});
	}

	function openSubNav(element, position, width) {
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
		    	height: "80vh",
		    	top: "100px"
		    }, 300);
		  });
		});
	}


})();