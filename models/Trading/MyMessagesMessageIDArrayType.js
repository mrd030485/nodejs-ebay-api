function MyMessagesMessageIDArrayType(MessageID) {

	/**
	  Documentation
	   Contains a list of up to 10 MessageID values.
	 */

	/**
	 * Arrays
	 *	MessageID: MyMessagesMessageIDType
	 */
	this.MessageID = MessageID;
}
MyMessagesMessageIDArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		MessageID: (this.MessageID === undefined)? null : this.MessageID
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
module.exports = MyMessagesMessageIDArrayType;