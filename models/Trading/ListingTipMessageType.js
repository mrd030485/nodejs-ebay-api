function ListingTipMessageType(ListingTipMessageID, ShortMessage, LongMessage, HelpURLPath) {

	/**
	  Documentation
	   
                Contains the message portion of a listing tip that is returned by the Listing Analyzer engine.
            
	 */

	/**
	 * Arrays
	 */
	this.ListingTipMessageID = ListingTipMessageID;
	this.ShortMessage = ShortMessage;
	this.LongMessage = LongMessage;
	this.HelpURLPath = HelpURLPath;
}
ListingTipMessageType.prototype.toJSON = function(with_null) {
	var json = { 
		ListingTipMessageID: (this.ListingTipMessageID === undefined)? null : this.ListingTipMessageID,
		ShortMessage: (this.ShortMessage === undefined)? null : this.ShortMessage,
		LongMessage: (this.LongMessage === undefined)? null : this.LongMessage,
		HelpURLPath: (this.HelpURLPath === undefined)? null : this.HelpURLPath
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
module.exports = ListingTipMessageType;