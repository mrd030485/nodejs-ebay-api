function GetSessionIDRequestType(RuName) {

	/**
	  Documentation
	   Retrieves a session ID that identifies a user and your application when you make a FetchToken request.
	 */

	/**
	 * Arrays
	 */
	this.RuName = RuName;
}
GetSessionIDRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		RuName: (this.RuName === undefined)? null : this.RuName
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
module.exports = GetSessionIDRequestType;