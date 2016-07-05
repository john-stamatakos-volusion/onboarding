/**
 * @author Mario Harper
 * @description Global items for onboarding process stored here.
 */
'use strict';

var Onboarding = (function(){

	var onboarding = {
		init: init
	}

	return onboarding;

	//////////////////////

	function init(params){
		Onboarding.Nav.init({id: params.id});
	}

})();