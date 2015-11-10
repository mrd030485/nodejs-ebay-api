function MyMessagesExternalMessageIDArrayType(ExternalMessageID) {

	/**
	  Documentation
	   Contains a list of up to 10 external message IDs.
	 */

	/**
	 * Arrays
	 *	ExternalMessageID: MyMessagesExternalMessageIDType
	 */
	this.ExternalMessageID = ExternalMessageID;
}
MyMessagesExternalMessageIDArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		ExternalMessageID: (this.ExternalMessageID === undefined)? null : this.ExternalMessageID
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
module.exports = MyMessagesExternalMessageIDArrayType;