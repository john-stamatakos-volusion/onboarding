/**
 * @author Mario Harper
 * @description Custom service used to talk to the onboarding database.
 */
'use strict';

var Onboarding = Onboarding || {};

Onboarding.Service = (function(){
	
	var API_BASE = 'https://dcqqifyaug.execute-api.us-west-2.amazonaws.com/prod/progress';

	var service = {
		getProgress: getProgress,
		getValue: getValue,
		setValue: setValue
	};

	return service;

	/////////////////////////
	
	/**
	 * Gets all of the Onboarding Event items for the given user.
	 * @param  {String}   uid      The users/stores unique ID in the Onboarding table.
	 * @param  {Function} callback Code executed after http request is made. 
	 * @return {N/A}
	 */
	function getProgress(uid, callback){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState == 4 && xhttp.status == 200) {
	      callback(JSON.parse(xhttp.responseText));
	    }
		}

		xhttp.open("GET", API_BASE+"?customerID="+uid, true);
  	xhttp.send();
	}

	function getValue(uid, key, callback){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState == 4 && xhttp.status == 200) {
	      callback(JSON.parse(xhttp.responseText));
	    }
		}

		xhttp.open("GET", API_BASE+"/event?customerID="+uid+"&key="+key, true);
  	xhttp.send();
	}

	function setValue(uid, key, value, callback){
		var data = {
			"customerID": uid,
			"key": key,
			"value": value
		}

		var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {
	      callback(JSON.parse(xhttp.responseText));
	    }
	  };
	  xhttp.open("POST", API_BASE+'/event', true);
	  xhttp.setRequestHeader("Content-type", "application/json");
	  xhttp.send(JSON.stringify(data));

	}

})();