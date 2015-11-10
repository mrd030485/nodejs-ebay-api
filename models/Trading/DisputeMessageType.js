function DisputeMessageType(MessageID, MessageSource, MessageCreationTime, MessageText) {

	/**
	  Documentation
	   Contains a message posted to a dispute. The message can be posted by the buyer, the seller, or an eBay representative.
	 */

	/**
	 * Arrays
	 */
	this.MessageID = MessageID;
	this.MessageSource = MessageSource;
	this.MessageCreationTime = MessageCreationTime;
	this.MessageText = MessageText;
}
DisputeMessageType.prototype.toJSON = function(with_null) {
	var json = { 
		MessageID: (this.MessageID === undefined)? null : this.MessageID,
		MessageSource: (this.MessageSource === undefined)? null : this.MessageSource,
		MessageCreationTime: (this.MessageCreationTime === undefined)? null : this.MessageCreationTime,
		MessageText: (this.MessageText === undefined)? null : this.MessageText
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
module.exports = DisputeMessageType;