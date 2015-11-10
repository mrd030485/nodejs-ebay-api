function MaxGranularFitmentCountDefinitionType() {

	/**
	  Documentation
	   Defines the total number of fine grained item compatibilities that can be applied to a listing (a maximum of 1000).
	 */

	/**
	 * Arrays
	 */
}
MaxGranularFitmentCountDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = MaxGranularFitmentCountDefinitionType;