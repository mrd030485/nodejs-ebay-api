function VRMSupportedDefinitionType() {

	/**
	  Documentation
	   If present, the site defines category settings for whether the seller can provide a Vehicle Registration Mark (VRM) for a UK eBay Motors vehicle listing.
	 */

	/**
	 * Arrays
	 */
}
VRMSupportedDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = VRMSupportedDefinitionType;