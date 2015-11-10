function MaxFlatShippingCostCBTExemptDefinitionType() {

	/**
	  Documentation
	   
                Max Flat Shipping Cost ... CBT Exempt. See Shipping docs.
            
	 */

	/**
	 * Arrays
	 */
}
MaxFlatShippingCostCBTExemptDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = MaxFlatShippingCostCBTExemptDefinitionType;