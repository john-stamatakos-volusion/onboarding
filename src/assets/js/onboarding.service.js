/**
 * @author Mario Harper
 * @description Custom service used to talk to the onboarding database.
 */
'use strict';

var Onboarding = Onboarding || {};

Onboarding.Service = (function(){
	
	var API_BASE = 'https://75ldug05qc.execute-api.us-west-2.amazonaws.com/dev/history';

	var service = {
		getProgress: getProgress
	};

	return service;

	/////////////////////////
	
	/**
	 * Gets all of the Onboarding Event items for the given user.
	 * @param  {String}   id      Unique ID in the Onboarding table.
	 * @param  {Function} callback Executed after http request is made. Passes in data. 
	 * @return {N/A}
	 */
	function getProgress(id, callback){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState == 4 && xhttp.status == 200) {
	      callback(JSON.parse(xhttp.responseText));
	    }
		}

		xhttp.open("GET", API_BASE+"/"+id, true);
  	xhttp.send();
	}

})();