var MemberMessageType = require('./MemberMessageType');

function AddMemberMessagesAAQToBidderRequestContainerType(CorrelationID, ItemID, MemberMessage) {

	/**
	  Documentation
	   This type is used by the <b>AddMemberMessagesAAQToBidderRequestContainer</b> container. A <b>AddMemberMessagesAAQToBidderRequestContainer</b> container is required for each bidder the seller is sending a message
                    to. The seller can communicate with up to 10 bidders with one <b>AddMemberMessagesAAQToBidder</b> call.
	 */

	/**
	 * Arrays
	 */
	var _MemberMessage;
	Object.defineProperty(this, 'MemberMessage', {
		 get: function(){
			 return _MemberMessage;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MemberMessageType){ 
					_MemberMessage = value; 
				}else{
					console.log('MemberMessage expects type MemberMessageType');
				}
			}
		}
	});
	this.CorrelationID = CorrelationID;
	this.ItemID = ItemID;
	this.MemberMessage = MemberMessage;
}
AddMemberMessagesAAQToBidderRequestContainerType.prototype.toJSON = function(with_null) {
	var json = { 
		CorrelationID: (this.CorrelationID === undefined)? null : this.CorrelationID,
		ItemID: (this.ItemID === undefined)? null : this.ItemID,
		MemberMessage: (this.MemberMessage === undefined)? null : this.MemberMessage.toJSON()
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
module.exports = AddMemberMessagesAAQToBidderRequestContainerType;