function DepositSupportedDefinitionType() {

	/**
	  Documentation
	   
                If present, the site defines category settings for whether the seller can specify a vehicle deposit for US eBay Motors listings.
            
	 */

	/**
	 * Arrays
	 */
}
DepositSupportedDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = DepositSupportedDefinitionType;