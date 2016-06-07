/**
 * @author Mario Harper
 * @description Module for  handling tour aspect of onboarding. 
 * 
 * Dependency on Hopscotch.
 */
'use strict';

var Onboarding = Onboarding || {};

Onboarding.Tour = (function(){

	var tour = {
		startIntroTour: startIntroTour,
		startAddProductTour: startAddProductTour,
		startAddLogoTour: startAddLogoTour
	}

	return tour;

	/////////////////////////////

	function startIntroTour(){
    var tour = {
      id: "welcome",
      steps: [
        {
          title: "View Your Store",
          content: "View your online store at any time",
          target: document.querySelector('.storefront-toggle'),
          placement: "bottom",
          xOffset: -10,
          fixedElement: true
        },
        {
          title: "Getting Started Steps",
          content: "Not sure where to start? We've got some tasks you can get started on.",
          target: document.querySelector('.help-launcher-button'),
          placement: "top",
          xOffset: -200,
          arrowOffset: 200,
          fixedElement: true
        }
      ]
    };

    // Start the tour!
    hopscotch.startTour(tour);
	}

	function startAddProductTour(){
		var tour = {
      id: "addProduct",
      steps: [
        {
          title: 'Hover over "Inventory".',
          target: document.querySelector('#MainNav_Inventory'),
          placement: "bottom",
          xOffset: 8,
          onNext: function(){
          	document.querySelector('#MainNav_Inventory .SubMenuWrapper').style.display = "block";
          }
        },
        {
          title: 'Select "Products".',
          target: document.querySelector('#Inventory_SubNav_Products'),
          placement: "right"
        }
      ],
      onEnd: function(){
      	Onboarding.Nav.checkoffItem(document.querySelector('#help-add-product'), true);
      	document.querySelector('#MainNav_Inventory .SubMenuWrapper').style.display = "none";
      }
    };

    // Start the tour!
    hopscotch.startTour(tour);
	}

	function startAddLogoTour(){
		var tour = {
      id: "addLogo",
      steps: [
        {
          title: 'Hover over "Design".',
          target: document.querySelector('#MainNav_Design'),
          placement: "bottom",
          xOffset: 8,
          onNext: function(){
          	document.querySelector('#MainNav_Design .SubMenuWrapper').style.display = "block";
          }
        },
        {
          title: 'Select "Logos".',
          target: document.querySelector('#Design_SubNav_Logos'),
          placement: "right"
        }
      ],
      onEnd: function(){
      	Onboarding.Nav.checkoffItem(document.querySelector('#help-add-logo'), true);
      	document.querySelector('#MainNav_Design .SubMenuWrapper').style.display = "none";
      }
    };

    // Start the tour!
    hopscotch.startTour(tour);
	}
})();