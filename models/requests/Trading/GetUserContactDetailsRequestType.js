function GetUserContactDetailsRequestType(ItemID, ContactID, RequesterID) {

	/**
	  Documentation
	   Returns contact information for a specified user, given that a bidding relationship (as either a buyer or seller) exists between the caller and the user.
	 */

	/**
	 * Arrays
	 */
	this.ItemID = ItemID;
	this.ContactID = ContactID;
	this.RequesterID = RequesterID;
}
GetUserContactDetailsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID,
		ContactID: (this.ContactID === undefined)? null : this.ContactID,
		RequesterID: (this.RequesterID === undefined)? null : this.RequesterID
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
module.exports = GetUserContactDetailsRequestType;