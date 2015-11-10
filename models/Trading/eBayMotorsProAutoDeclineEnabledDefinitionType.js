function eBayMotorsProAutoDeclineEnabledDefinitionType() {

	/**
	  Documentation
	   Indicates whether automatic decline of best offers is allowed for this category. Returned only if this category overrides the site default. Added for EbayMotors Pro users.
	 */

	/**
	 * Arrays
	 */
}
eBayMotorsProAutoDeclineEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = eBayMotorsProAutoDeclineEnabledDefinitionType;