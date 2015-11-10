function GetNotificationPreferencesRequestType(PreferenceLevel) {

	/**
	  Documentation
	   Retrieves the requesting application's notification preferences. Details are only returned for events for which a preference has been set. For example, if you enabled notification for the EndOfAuction event and later disabled it, the GetNotificationPreferences
                    response would cite the EndOfAuction event preference as Disabled. Otherwise, no details would be returned regarding EndOfAuction.
	 */

	/**
	 * Arrays
	 */
	this.PreferenceLevel = PreferenceLevel;
}
GetNotificationPreferencesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		PreferenceLevel: (this.PreferenceLevel === undefined)? null : this.PreferenceLevel
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
module.exports = GetNotificationPreferencesRequestType;