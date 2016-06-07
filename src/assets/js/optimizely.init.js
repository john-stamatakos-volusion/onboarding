(function(){
	'use strict';

	window.adm_storeid = 'abc1234'; // TESTING

	// find the storeID, remove dashes
	var storeID = (window.adm_storeid || idFromURL(window.location.href) || null)
	if(!storeID){
		console.log("Store ID: Not found. Onboarding will not persist.");
	}

	storeID = storeID.replace(/-/g, ''); // remove dashes
	console.log("Store ID:", storeID);

  insertHTML();

	// initialize onboarding
	Onboarding.init({
		customerID: storeID
	});

	if(!Onboarding.Helpers.getCookie('introTourDisabled')){
		Onboarding.Tour.startIntroTour(); 
	}

  $('.modal-trigger').leanModal();
  
})(); 

/**
 * Tries to get the ID of the store from the URL
 * @param  {String} url The URL to search through
 * @return {Int||NULL} The ID or NULL (if not found)
 */
function idFromURL(url){
	var id = url.split('.')[0];
	id = (id) ? id.split('v') : null;
	return (id.length > 1) ? id[1] : null;
} 

function insertHTML(){
  // create the HTML for the module
  var navHTML = 
  '<div id="help-nav" class="card">' +
    '<div class="close right">' + 
      '<i class="material-icons">close</i>'+
    '</div>'+
    '<ul>'+
      '<li data-onboarding-item="watchVideo" id="help-intro-video" class="modal-trigger" href="#modal1">'+
        '<span class="check-box"></span>'+
        '<span class="todo-msg">Watch introduction video</span>'+
        '<span class="done-msg">You watched the introduction video<span>'+
      '</li>'+
      '<li data-onboarding-item="addProduct" id="help-add-product" onclick="Onboarding.Tour.startAddProductTour();">'+
        '<span class="check-box"></span>'+          
        '<span class="todo-msg">Add a product</span>'+
        '<span class="done-msg">You added a product</span>'+
      '</li>'+
      '<li data-onboarding-item="addLogo" id="help-add-logo" onclick="Onboarding.Tour.startAddLogoTour();">'+
        '<span class="check-box"></span>'+
        '<span class="todo-msg">Add your logo</span>'+
        '<span class="done-msg">You added your logo</span>'+
      '</li>'+
      '<li data-onboarding-item="addStoreInfo" onclick="Onboarding.Nav.checkoffItem(this, true);">'+
        '<span class="check-box"></span>'+
        '<span class="todo-msg">Add store info</span>'+
        '<span class="done-msg">Your store info is complete</span>'+
      '</li>'+
      '<li data-onboarding-item="sellOnSocialSetup" onclick="Onboarding.Nav.checkoffItem(this, true);">'+
        '<span class="check-box"></span>'+
        '<span class="todo-msg">Sell on social</span>'+
        '<span class="done-msg">You are waiting to sell on social</span>'+
      '</li>'+
      '<li data-onboarding-item="bookmarkStore" onclick="Onboarding.Nav.checkoffItem(this, true);">'+
        '<span class="check-box"></span>'+
        '<span class="todo-msg">Bookmark your store</span>'+
        '<span class="done-msg">Your store is bookmarked</span>'+
      '</li>'+
      '<li data-onboarding-item="selectPlan" onclick="Onboarding.Nav.checkoffItem(this, true);"> '+
        '<span class="check-box"></span>'+
        '<span class="todo-msg">Select a plan</span>'+
        '<span class="done-msg">You selected a plan</span>'+
        '<span class="todo-msg badge">6 days left in free trial</span>'+
        '<span class="done-msg badge">PRO</span>'+
      '</li>'+
    '</ul>'+
  '</div>';

  var navBtnHTML = 
  '<div class="help-nav-launcher-button">'+
    '<i class="material-icons">playlist_add_check</i>' +
  '</div>';

  var modalHTML = 
  '<div id="help-nav-modal" class="modal">'+
    '<i class="material-icons modal-action modal-close">close</i>'+
    '<div class="modal-content">'+
      '<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_s5ai57iv3r seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>'+
    '</div>'+
  '</div>';

  // append HTML to body
  document.querySelector('body').innerHTML += navHTML + navBtnHTML + modalHTML;
}
