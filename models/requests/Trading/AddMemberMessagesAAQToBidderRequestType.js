function AddMemberMessagesAAQToBidderRequestType(AddMemberMessagesAAQToBidderRequestContainer) {

	/**
	  Documentation
	   The base request of the <b>AddMemberMessagesAAQToBidder</b> call, which allows a seller to send up to 10 messages to bidders/potential buyers regarding an active listing. These potential buyers may include those who have made
                    a Best Offer on a listing.
	 */

	/**
	 * Arrays
	 *	AddMemberMessagesAAQToBidderRequestContainer: AddMemberMessagesAAQToBidderRequestContainerType
	 */
	this.AddMemberMessagesAAQToBidderRequestContainer = AddMemberMessagesAAQToBidderRequestContainer;
}
AddMemberMessagesAAQToBidderRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		AddMemberMessagesAAQToBidderRequestContainer: (this.AddMemberMessagesAAQToBidderRequestContainer === undefined)? null : this.AddMemberMessagesAAQToBidderRequestContainer
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
module.exports = AddMemberMessagesAAQToBidderRequestType;