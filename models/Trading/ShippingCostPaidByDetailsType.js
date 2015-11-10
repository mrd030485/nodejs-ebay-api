function ShippingCostPaidByDetailsType(ShippingCostPaidByOption, Description) {

	/**
	  Documentation
	   
                This type defines the ShippingCostPaidBy container that is returned in GeteBayDetails if ReturnPolicyDetails is set as a DetailNameCodeType value (or if no value is included in the request.
            
	 */

	/**
	 * Arrays
	 */
	this.ShippingCostPaidByOption = ShippingCostPaidByOption;
	this.Description = Description;
}
ShippingCostPaidByDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ShippingCostPaidByOption: (this.ShippingCostPaidByOption === undefined)? null : this.ShippingCostPaidByOption,
		Description: (this.Description === undefined)? null : this.Description
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
module.exports = ShippingCostPaidByDetailsType;