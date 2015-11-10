function UserIDArrayType(UserID) {

	/**
	  Documentation
	   Contains an array of eBay UserID entries.
	 */

	/**
	 * Arrays
	 *	UserID: UserIDType
	 */
	this.UserID = UserID;
}
UserIDArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		UserID: (this.UserID === undefined)? null : this.UserID
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
module.exports = UserIDArrayType;