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
	 * @param  {String}   uid      Unique ID in the Onboarding table.
	 * @param  {Function} callback Executed after http request is made. Passes in data. 
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

	/**
	 * Gets specific Onboarding Event value for the given user.
	 * @param  {String}   uid      Unique ID in the Onboarding table.
	 * @param  {String}   key      Name of Event to look for in the table. 
	 * @param  {Function} callback Executed after http request. Passes in the data.
	 * @return {[type]}            
	 */
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

	/**
	 * Sets specific Onboarding Event for the given user.
	 * @param {String}   uid      Unique ID in the Onboarding table.
	 * @param {String}   key      Name of the Onboarding Event.
	 * @param {Dyamic}   value    Value to set for the Event.
	 * @param {Function} callback [description]
	 */
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