function XMLRequesterCredentialsType(Username, Password, eBayAuthToken) {

	/**
	  Documentation
	   
            
	 */

	/**
	 * Arrays
	 */
	this.Username = Username;
	this.Password = Password;
	this.eBayAuthToken = eBayAuthToken;
}
XMLRequesterCredentialsType.prototype.toJSON = function(with_null) {
	var json = { 
		Username: (this.Username === undefined)? null : this.Username,
		Password: (this.Password === undefined)? null : this.Password,
		eBayAuthToken: (this.eBayAuthToken === undefined)? null : this.eBayAuthToken
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
module.exports = XMLRequesterCredentialsType;