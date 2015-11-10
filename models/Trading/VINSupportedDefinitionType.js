function VINSupportedDefinitionType() {

	/**
	  Documentation
	   
                If present, the site defines category settings for when the seller can provide a Vehicle Identification Number (VIN) for US, CA, and CAFR eBay Motors sites. VIN is required for cars and trucks from model year 1981 and later. (The US developed national
                standards for VIN values as of 1981.)
            
	 */

	/**
	 * Arrays
	 */
}
VINSupportedDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = VINSupportedDefinitionType;