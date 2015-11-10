function MyMessagesResponseDetailsType(ResponseEnabled, ResponseURL, UserResponseDate) {

	/**
	  Documentation
	   Details relating to the response to a message.
	 */

	/**
	 * Arrays
	 */
	this.ResponseEnabled = ResponseEnabled;
	this.ResponseURL = ResponseURL;
	this.UserResponseDate = UserResponseDate;
}
MyMessagesResponseDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ResponseEnabled: (this.ResponseEnabled === undefined)? null : this.ResponseEnabled,
		ResponseURL: (this.ResponseURL === undefined)? null : this.ResponseURL,
		UserResponseDate: (this.UserResponseDate === undefined)? null : this.UserResponseDate
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
module.exports = MyMessagesResponseDetailsType;