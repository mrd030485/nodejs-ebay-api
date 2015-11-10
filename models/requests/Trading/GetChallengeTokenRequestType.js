function GetChallengeTokenRequestType() {

	/**
	  Documentation
	   Retrieves a botblock token and URLs for an image or audio clip that the user is to match.
	 */

	/**
	 * Arrays
	 */
}
GetChallengeTokenRequestType.prototype.toJSON = function(with_null) {
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
module.exports = GetChallengeTokenRequestType;