function AddMemberMessagesAAQToBidderResponseContainerType(CorrelationID, Ack) {

	/**
	  Documentation
	   This type is used by the <b>AddMemberMessagesAAQToBidderResponseContainer</b> container. A <b>AddMemberMessagesAAQToBidderResponseContainer</b> container is returned for each message that was sent from the seller
                    to the bidders/potential buyers through a separate <b>AddMemberMessagesAAQToBidderRequestContainer</b>. The <b>Ack</b> value in each <b>AddMemberMessagesAAQToBidderResponseContainer</b> container
                    indicates whether or not each message sent through the call was successful or not, and an <b>AddMemberMessagesAAQToBidderResponseContainer</b> is matched up to the corresponding <b>AddMemberMessagesAAQToBidderRequestContainer</b>
                    through the <b>CorrelationID</b> value.
	 */

	/**
	 * Arrays
	 */
	this.CorrelationID = CorrelationID;
	this.Ack = Ack;
}
AddMemberMessagesAAQToBidderResponseContainerType.prototype.toJSON = function(with_null) {
	var json = { 
		CorrelationID: (this.CorrelationID === undefined)? null : this.CorrelationID,
		Ack: (this.Ack === undefined)? null : this.Ack
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
module.exports = AddMemberMessagesAAQToBidderResponseContainerType;