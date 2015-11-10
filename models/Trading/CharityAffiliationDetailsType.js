function CharityAffiliationDetailsType(CharityAffiliationDetail) {

	/**
	  Documentation
	   
                Lists the nonprofit charity organization affiliations for a specified user.
            
	 */

	/**
	 * Arrays
	 *	CharityAffiliationDetail: CharityAffiliationDetailType
	 */
	this.CharityAffiliationDetail = CharityAffiliationDetail;
}
CharityAffiliationDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		CharityAffiliationDetail: (this.CharityAffiliationDetail === undefined)? null : this.CharityAffiliationDetail
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
module.exports = CharityAffiliationDetailsType;