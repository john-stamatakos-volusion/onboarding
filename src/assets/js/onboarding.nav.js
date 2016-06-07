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

	  $('.help-launcher-button').click(function(){
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
	  });

	  _setProgress();

	}

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


})();