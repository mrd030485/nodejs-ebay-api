function GetStorePreferencesRequestType() {

	/**
	  Documentation
	   Retrieves a user's Store preferences.
	 */

	/**
	 * Arrays
	 */
}
GetStorePreferencesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
	};
	if(!with_null) {
		for(var k in json) {
			if(json[k] === null) {
				delete json[k];
			}
		}
	}
	return json;
};
module.exports = GetStorePreferencesRequestType;