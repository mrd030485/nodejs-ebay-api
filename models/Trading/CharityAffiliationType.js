function CharityAffiliationType() {

	/**
	  Documentation
	   
                Defines the affiliation status for a nonprofit charity organization registered with the dedicated eBay Giving Works provider.
            
	 */

	/**
	 * Arrays
	 */
}
CharityAffiliationType.prototype.toJSON = function(with_null) {
	var json = { 
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
module.exports = CharityAffiliationType;