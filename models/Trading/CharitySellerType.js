function CharitySellerType(CharitySellerStatus, CharityAffiliation, TermsAndConditionsAccepted) {

	/**
	  Documentation
	   Contains information about one seller with a eBay Giving Works provider charity seller account.
	 */

	/**
	 * Arrays
	 *	CharityAffiliation: CharityAffiliationType
	 */
	this.CharitySellerStatus = CharitySellerStatus;
	this.CharityAffiliation = CharityAffiliation;
	this.TermsAndConditionsAccepted = TermsAndConditionsAccepted;
}
CharitySellerType.prototype.toJSON = function(with_null) {
	var json = { 
		CharitySellerStatus: (this.CharitySellerStatus === undefined)? null : this.CharitySellerStatus,
		CharityAffiliation: (this.CharityAffiliation === undefined)? null : this.CharityAffiliation,
		TermsAndConditionsAccepted: (this.TermsAndConditionsAccepted === undefined)? null : this.TermsAndConditionsAccepted
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
module.exports = CharitySellerType;